import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MailerService {
  private transporter: nodemailer.Transporter;

  constructor(private prisma: PrismaService) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service provider
      auth: {
        user: 'tuanhungtester@gmail.com',
        pass: 'vckkyhvzvelxajsq',
      },
    });
  }

  async requestPost({ user, limitTime, title, detail }) {
    const admins = await this.prisma.user.findMany({
      where: {
        role: {
          in: ['ADMIN', 'SUPERADMIN'],
        },
      },
    });
    const mailOptions = {
      from: user.email,
      to: admins.map((item) => item.email),
      subject: '[VIETLIT SYSTEM]',
      html: `<h1>Nhận được y&ecirc;u cầu viết b&agrave;i!!</h1>
<h2><br>Th&ocirc;ng tin người y&ecirc;u cầu:</h2>
<p><strong>Họ t&ecirc;n:</strong> ${user.name}</p>
<p><strong>Email:&nbsp;</strong>${user.email}</p>
<p><strong>Ng&agrave;y tham gia:&nbsp;</strong>${new Date(
        user.createdAt,
      ).toLocaleString('vi')}</p>
<h2><strong>Th&ocirc;ng tin nội dung y&ecirc;u cầu:</strong></h2>
<p><strong>Giới hạn thời gian:</strong> ${
        limitTime ? new Date(limitTime).toLocaleString('vi') : 'Không giới hạn'
      }</p>
<p><strong>Ti&ecirc;u đề:</strong> ${title}</p>
<p><strong>Chi tiết:<br></strong></p>
<p>${detail.replaceAll(`\n`, '<br>')}</p>
<p>&nbsp;</p>
<p><strong>=============</strong></p>
<p><strong>Mailer - By Tuan Hung<br>Được tạo l&uacute;c: </strong>${new Date().toLocaleString(
        'vi',
      )}</p>`,
    };
    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      if (!info.response.includes('OK'))
        throw new InternalServerErrorException(
          'Có lỗi xảy ra khi gửi yêu cầu!',
        );
      return { data: 'OK', message: 'Đã gửi yêu cầu bài viết!' };
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  }

  async contributorRegister({ user, phone, address, carrer, intro }) {
    const supperAdmins = await this.prisma.user.findMany({
      where: {
        role: 'SUPERADMIN',
      },
    });
    const mailOptions = {
      from: user.email,
      to: supperAdmins[0]
        ? supperAdmins.map((item) => item.email)
        : 'hungbuituan1@gmail.com',
      subject: '[VIETLIT SYSTEM]',
      html: `<h1>Nhận được y&ecirc;u cầu đăng k&iacute; trở th&agrave;nh cộng t&aacute;c vi&ecirc;n</h1>
<h2>Th&ocirc;ng tin người đăng k&iacute;:</h2>
<p><strong>Họ t&ecirc;n:&nbsp;</strong>${user.name}</p>
<p><strong>Email:&nbsp;</strong>${user.email}</p>
<p><strong>Ng&agrave;y tham gia:&nbsp;</strong>${new Date(
        user.createdAt,
      ).toLocaleString('vi')}</p>
<p><strong>Số điện thoại:&nbsp;</strong>${phone}</p>
<p><strong>Địa chỉ;&nbsp;</strong>${address}</p>
<p><strong>Nghề nghiệp hiện tại:&nbsp;</strong>${carrer}</p>
<p><strong>Giới thiệu:</strong>&nbsp;${intro}</p>`,
    };
    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      if (!info.response.includes('OK'))
        throw new InternalServerErrorException(
          'Có lỗi xảy ra khi gửi yêu cầu!',
        );
      return { data: 'OK', message: 'Đã gửi yêu cầu bài viết!' };
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  }

  async sendChangePasswordUrl(user, token) {
    const mailOptions = {
      from: 'vietlit@gmail.com',
      to: user.email,
      subject: 'Hướng dẫn đổi mật khẩu cho tài khoản của bạn',
      html: `
<p>Ch&agrave;o bạn <strong>${user.name}</strong>,</p>
<p>Ch&uacute;ng t&ocirc;i nhận được y&ecirc;u cầu đổi mật khẩu cho t&agrave;i khoản của bạn. Để tiến h&agrave;nh thay đổi mật khẩu, vui l&ograve;ng nhấp v&agrave;o li&ecirc;n kết b&ecirc;n dưới:</p>
<p><em><a href='${
        process.env.BASE_FE_URL + '/change-password?token=' + token
      }'>Nhâp vào đây!</a></em></p>
<p><strong>Lưu ý:</strong> đường dẫn chỉ có hiệu lực trong 5 phút!!</p>      
<p>Nếu bạn kh&ocirc;ng thực hiện y&ecirc;u cầu n&agrave;y, bạn c&oacute; thể bỏ qua email n&agrave;y. T&agrave;i khoản của bạn vẫn được bảo mật.</p>
<p>Nếu bạn gặp bất kỳ kh&oacute; khăn hoặc cần sự trợ gi&uacute;p, đừng ngần ngại li&ecirc;n hệ với ch&uacute;ng t&ocirc;i qua địa chỉ email <strong>vietlit@gmail.com</strong> hoặc số điện thoại <strong>123-456-7890</strong>.</p>
<p>Xin cảm ơn!</p>
      `,
    };
    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      if (!info.response.includes('OK'))
        throw new InternalServerErrorException(
          'Có lỗi xảy ra khi gửi yêu cầu!',
        );
      return {
        data: 'OK',
        message: 'Đã gửi đường dẫn đổi mất khẩu tới email của bạn!',
      };
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  }
}
