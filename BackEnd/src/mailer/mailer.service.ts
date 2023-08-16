import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
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
      subject: '[Học văn không vất vả - Yêu cầu viết bài]',
      html: `<h2>Th&ocirc;ng tin người y&ecirc;u cầu:</h2>
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
  async requestPublishPost({ createdByUser, title, summary }) {
    const admins = await this.prisma.user.findMany({
      where: {
        role: {
          in: ['ADMIN', 'SUPERADMIN'],
        },
      },
    });
    const mailOptions = {
      from: createdByUser.email,
      to: admins.map((item) => item.email),
      subject: '[Học văn không vất vả - Yêu cầu duyệt bài]',
      html: `<h2>Th&ocirc;ng tin người y&ecirc;u cầu:</h2>
<p><strong>Họ t&ecirc;n:</strong> ${createdByUser.name}</p>
<p><strong>Email:&nbsp;</strong>${createdByUser.email}</p>
<p><strong>Ng&agrave;y tham gia:&nbsp;</strong>${new Date(
        createdByUser.createdAt,
      ).toLocaleString('vi')}</p>
<h2><strong>Th&ocirc;ng tin nội dung y&ecirc;u cầu:</strong></h2>
<h2><strong>Ti&ecirc;u đề:</strong> ${title}</h2>
<p><strong>Tóm tắt:<br></strong></p>
<p>${summary}</p>
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
      subject: '[Học văn không vất vả - Đăng kí cộng tác viên]',
      html: `<h2>Nhận được y&ecirc;u cầu đăng k&iacute; trở th&agrave;nh cộng t&aacute;c vi&ecirc;n</h2><h2>Th&ocirc;ng tin người đăng k&iacute;:</h2>
<p><strong>Họ t&ecirc;n:&nbsp;</strong>${user.name}</p>
<p><strong>Email:&nbsp;</strong>${user.email}</p>
<p><strong>Ng&agrave;y tham gia:&nbsp;</strong>${new Date(
        user.createdAt,
      ).toLocaleString('vi')}</p>
<p><strong>Số điện thoại:&nbsp;</strong>${phone}</p>
<p><strong>Địa chỉ:&nbsp;</strong>${address}</p>
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
      return { data: 'OK', message: 'Đã gửi yêu cầu!' };
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  }

  async sendChangePasswordUrl(user, token) {
    const mailOptions = {
      from: 'hocvankhongvatva@gmail.com',
      to: user.email,
      subject: 'Hướng dẫn đổi mật khẩu cho tài khoản của bạn',
      html: `
<p>Ch&agrave;o bạn <strong>${user.name}</strong>,</p>
<p>Ch&uacute;ng t&ocirc;i nhận được y&ecirc;u cầu đổi mật khẩu cho t&agrave;i khoản của bạn. Để tiến h&agrave;nh thay đổi mật khẩu, vui l&ograve;ng nhấp v&agrave;o li&ecirc;n kết b&ecirc;n dưới:</p>
<p><em><a href='${
        process.env.BASE_FE_URL + '/change-password-case-forgot?token=' + token
      }'>Nhâp vào đây!</a></em></p>
<p><strong>Lưu ý:</strong> đường dẫn chỉ có hiệu lực trong 5 phút!!</p>      
<p>Nếu bạn kh&ocirc;ng thực hiện y&ecirc;u cầu n&agrave;y, bạn c&oacute; thể bỏ qua email n&agrave;y. T&agrave;i khoản của bạn vẫn được bảo mật.</p>
<p>Nếu bạn gặp bất kỳ kh&oacute; khăn hoặc cần sự trợ gi&uacute;p, đừng ngần ngại li&ecirc;n hệ với ch&uacute;ng t&ocirc;i qua địa chỉ email <strong>hocvankhongvatva@gmail.com</strong> hoặc số điện thoại <strong>123-456-7890</strong>.</p>
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
  async alertPost({ id, email }) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    const post = await this.prisma.post.findUnique({
      where: {
        postId: id,
      },
    });
    if (!user) throw new ForbiddenException('User không tồn tại!');
    const mailOptions = {
      from: 'hocvankhongvatva@gmail.com',
      to: user.email,
      subject: 'Hoàn Thành Viết Bài theo Yêu Cầu ',
      html: `<p>Ch&agrave;o bạn <strong>${user.name}</strong>,</p>
<p><strong>Học Văn Kh&ocirc;ng Vất Vả</strong> xin gửi lời ch&agrave;o v&agrave; th&ocirc;ng b&aacute;o tới bạn rằng ch&uacute;ng t&ocirc;i đ&atilde; ho&agrave;n th&agrave;nh viết b&agrave;i theo y&ecirc;u cầu m&agrave; bạn đ&atilde; gửi trước đ&oacute;. Ch&uacute;ng t&ocirc;i rất vui được th&ocirc;ng b&aacute;o rằng b&agrave;i viết đ&atilde; sẵn s&agrave;ng để bạn xem x&eacute;t.</p>
<p>Dưới đ&acirc;y l&agrave; th&ocirc;ng tin cơ bản về b&agrave;i viết:</p>
<h2><strong>Ti&ecirc;u đề: </strong>${post.title}</h2>
<p><strong>T&oacute;m tắt: </strong>${post.summary}</p>
<a href='${
        process.env.BASE_FE_URL + '/post/' + post.slug
      }'>Click vào đây để đọc bài viết</a>
<p>Ch&uacute;ng t&ocirc;i rất mong nhận được phản hồi từ bạn v&agrave; hy vọng rằng b&agrave;i viết sẽ đ&aacute;p ứng tốt nhất nhu cầu v&agrave; mong muốn của bạn.</p>
<p>Xin cảm ơn v&igrave; đ&atilde; sử dụng dịch vụ của ch&uacute;ng t&ocirc;i v&agrave; ch&uacute;c bạn một ng&agrave;y vui vẻ!</p>
<p>Tr&acirc;n trọng,</p>
<p><strong>Admin Học Văn Kh&ocirc;ng Vất Vả</strong></p>
<p>hocvankhongvatva@gmail.com</p>
      `,
    };
    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      if (!info.response.includes('OK'))
        throw new InternalServerErrorException(
          'Có lỗi xảy ra khi gửi thông báo!',
        );
      return {
        data: 'OK',
        message: 'Gửi thông báo thành công!',
      };
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  }
}
