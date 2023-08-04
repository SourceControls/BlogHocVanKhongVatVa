// prisma/seed.ts

import { ad_display_position, PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();
const content = `<p class="description" style="text-align: justify;">&nbsp;</p>
<article class="fck_detail ">
<p class="Normal" style="text-align: justify;">&nbsp;</p>
<p class="Normal" style="text-align: justify;">C&ograve;n ng&agrave;y nay, tr&ecirc;n Internet cũng c&oacute; thể triển khai dịch vụ viễn th&ocirc;ng xuy&ecirc;n bi&ecirc;n giới, đặt ra b&agrave;i to&aacute;n quản l&yacute; phải bảo đảm nguy&ecirc;n tắc b&igrave;nh đẳng giữa c&aacute;c dịch vụ c&ugrave;ng vấn đề an to&agrave;n, an ninh. V&igrave; vậy, dự thảo quy định chi tiết về quản l&yacute; việc cung cấp v&agrave; h&igrave;nh thức cấp ph&eacute;p với dịch vụ viễn th&ocirc;ng, trong đ&oacute; c&oacute; trung t&acirc;m dữ liệu, điện to&aacute;n đ&aacute;m m&acirc;y để đảm bảo t&iacute;nh linh hoạt, đảm bảo cơ chế khuyến kh&iacute;ch dịch vụ mới ph&aacute;t triển.</p>
<p class="Normal" style="text-align: justify;">&Ocirc;ng H&ugrave;ng n&oacute;i th&ecirc;m, sự ph&aacute;t triển của c&ocirc;ng nghệ vệ tinh mới như vệ tinh ch&ugrave;m đặt ra y&ecirc;u cầu bổ sung, ho&agrave;n thiện quy định quản l&yacute; hoạt động cung cấp dịch vụ viễn th&ocirc;ng vệ tinh xuy&ecirc;n bi&ecirc;n giới v&agrave;o Việt Nam, bảo vệ quyền lợi của người sử dụng tại Việt Nam</p>
<figure class="image"><img src="https://vcdn-vnexpress.vnecdn.net/2023/06/02/1a874784732fad71f43e-168567410-3241-6869-1685674603.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=uEI-6FbA5qbz38nSDb6Www" alt="Bộ trưởng Th&ocirc;ng tin v&agrave; Truyền th&ocirc;ng Nguyễn Mạnh H&ugrave;ng ph&aacute;t biểu s&aacute;ng 2/6. Ảnh: Media Quốc hội" width="1200px">
<figcaption>
<figure class="tplCaption action_thumb_added" data-size="true">
<figcaption>
<div class="Image" style="text-align: center;">Bộ trưởng Th&ocirc;ng tin v&agrave; Truyền th&ocirc;ng Nguyễn Mạnh H&ugrave;ng s&aacute;ng 2/6. Ảnh:&nbsp;<em>Media Quốc hội</em></div>
</figcaption>
</figure>
</figcaption>
</figure>
<p class="Normal" style="text-align: justify;">Đại diện cơ quan thẩm tra, &ocirc;ng L&ecirc; Quang Huy, Chủ nhiệm Ủy ban Khoa học, C&ocirc;ng nghệ v&agrave; M&ocirc;i trường, cho rằng OTT về bản chất l&agrave; d&ugrave;ng Internet để cung cấp phần mềm ứng dụng, như Zalo, Viber, Telegram. Theo kinh nghiệm quốc tế, về cơ bản, OTT được chia th&agrave;nh hai loại ch&iacute;nh, gồm OTT viễn th&ocirc;ng v&agrave; OTT cung cấp nội dung th&ocirc;ng tin</p>
<p class="Normal" style="text-align: justify;">OTT c&oacute; chức năng hội thoại, họp trực tuyến, chat, tin nhắn kh&ocirc;ng thu ph&iacute;. Đặc điểm n&agrave;y dẫn đến việc sử dụng dịch vụ OTT ph&aacute;t triển rất nhanh, ảnh hưởng lớn đến doanh thu tin nhắn v&agrave; thoại truyền thống của doanh nghiệp viễn th&ocirc;ng nhiều quốc gia, trong đ&oacute; c&oacute; thị trường Việt Nam. Quản l&yacute; OTT viễn th&ocirc;ng sẽ l&agrave; ch&iacute;nh s&aacute;ch quan trọng, c&oacute; t&aacute;c động lớn đến người d&acirc;n, doanh nghiệp, đến c&ocirc;ng cuộc chuyển đổi số, ph&aacute;t triển kinh tế số, x&atilde; hội số.</p>
<p class="Normal" style="text-align: justify;">Đa số &yacute; kiến của Ủy ban nhất tr&iacute; rằng việc ph&aacute;p luật chưa c&oacute; quy định quản l&yacute; về vấn đề n&agrave;y sẽ dẫn đến quyền lợi của người d&ugrave;ng chưa được bảo đảm về bảo mật dịch vụ, t&iacute;nh minh bạch, th&ocirc;ng tin, khả năng truy cập. Do đ&oacute;, OTT viễn th&ocirc;ng cần được quản l&yacute; theo c&aacute;ch thức ph&ugrave; hợp.</p>
<figure class="image"><img src="https://vcdn-vnexpress.vnecdn.net/2023/06/02/983445387193afcdf682-6653-1685674603.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=orbhHJdyYuOSR3WxwblbFA" alt="Chủ nhiệm Ủy ban Khoa học, C&ocirc;ng nghệ v&agrave; M&ocirc;i trường L&ecirc; Quang Huy. Ảnh: Media Quốc hội" width="1200px">
<figcaption>
<figure class="tplCaption action_thumb_added" data-size="true">
<figcaption>
<p class="Image" style="text-align: center;">Chủ nhiệm Ủy ban Khoa học, C&ocirc;ng nghệ v&agrave; M&ocirc;i trường L&ecirc; Quang Huy. Ảnh:&nbsp;<em>Media Quốc hội</em></p>
</figcaption>
</figure>
</figcaption>
</figure>
<div class="sidebar-1">
<article class="fck_detail ">
<p class="Normal" style="text-align: justify;">Trước đ&oacute;, tại cuộc họp của Bộ Th&ocirc;ng tin v&agrave; Truyền th&ocirc;ng th&aacute;ng 4, &ocirc;ng Cao Anh Sơn, Tổng gi&aacute;m đốc Viettel Telecom, cho biết doanh nghiệp viễn th&ocirc;ng đang chứng kiến sự suy giảm lớn về dịch vụ gọi điện v&agrave; SMS, nhưng ứng dụng OTT lại ph&aacute;t triển mạnh mẽ, trong đ&oacute; c&oacute; những ứng dụng tăng trưởng ở mức hai con số. "Trong sự dịch chuyển đ&oacute;, nh&agrave; mạng lu&ocirc;n đảm bảo hạ tầng cho c&aacute;c OTT ph&aacute;t triển, tuy nhi&ecirc;n lại kh&ocirc;ng được chia sẻ về đầu tư hạ tầng. G&aacute;nh nặng cho nh&agrave; mạng trong đầu tư hạ tầng l&agrave; vấn đề lớn", &ocirc;ng Sơn n&oacute;i.</p>
<p class="Normal" style="text-align: justify;">C&ograve;n trong cuộc họp giữa th&aacute;ng 4 của Ủy ban Thường vụ Quốc hội, Bộ trưởng Th&ocirc;ng tin v&agrave; Truyền th&ocirc;ng Nguyễn Mạnh H&ugrave;ng cho rằng 90% dung lượng mạng đang phục vụ dịch vụ OTT, nhưng nh&agrave; mạng kh&ocirc;ng thu được lợi nhuận tương ứng để đảm bảo hạ tầng.</p>
<p class="Normal" style="text-align: justify;">"L&agrave;m c&aacute;ch n&agrave;o để ph&aacute;t triển hạ tầng mạng khi c&aacute;c OTT ng&agrave;y một gi&agrave;u l&ecirc;n, c&ograve;n nh&agrave; mạng đang ngh&egrave;o đi?", Bộ trưởng đặt c&acirc;u hỏi.</p>
<p class="Normal" style="text-align: justify;">B&ecirc;n cạnh đ&oacute;, tại cuộc họp s&aacute;ng nay, c&oacute; &yacute; kiến cho rằng việc dự thảo đưa trung t&acirc;m dữ liệu, điện to&aacute;n đ&aacute;m m&acirc;y v&agrave; viễn th&ocirc;ng cơ bản tr&ecirc;n Internet v&agrave;o nh&oacute;m cần điều chỉnh c&oacute; thể sẽ l&agrave;m tăng chi ph&iacute; tu&acirc;n thủ của doanh nghiệp li&ecirc;n quan, ảnh hưởng đến lợi &iacute;ch m&agrave; dịch vụ đ&oacute; c&oacute; thể mang lại đối với nền kinh tế, t&aacute;c động ti&ecirc;u cực đến thu h&uacute;t đầu tư nước ngo&agrave;i tại Việt Nam.</p>
<p class="Normal" style="text-align: justify;">Do đ&oacute;, Ủy ban đề nghị cơ quan chủ tr&igrave; soạn thảo nghi&ecirc;n cứu v&agrave; tham khảo kinh nghiệm lập ph&aacute;p của c&aacute;c nước, l&agrave;m r&otilde; hơn việc mở rộng phạm vi điều chỉnh của dự thảo v&agrave; b&aacute;o c&aacute;o Quốc hội về định hướng thiết kế hệ thống luật li&ecirc;n quan đến lĩnh vực c&ocirc;ng nghệ th&ocirc;ng tin v&agrave; truyền th&ocirc;ng thời gian tới.</p>
<p class="Normal" style="text-align: justify;"><span style="font-size: 14pt;"><strong>Sơn H&agrave;</strong></span><a class="thumb thumb-5x3" title="Thế giới ngầm Telegram tại Việt Nam" href="https://vnexpress.net/the-gioi-ngam-telegram-tai-viet-nam-4599604.html" data-itm-source="#vn_source=Detail-SoHoa_CongNghe-4612674&amp;vn_campaign=Box-TinXemThem&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1"><picture><source srcset="https://vcdn1-sohoa.vnecdn.net/2023/04/30/telegramDSC0880711581682848534-1890-9541-1682851458.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=ppEwiqUIiTvOo6y2iW4TJQ 1x, https://vcdn1-sohoa.vnecdn.net/2023/04/30/telegramDSC0880711581682848534-1890-9541-1682851458.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=r-WxQPVcoLuPrmON8Ks9ZQ 2x" data-srcset="https://vcdn1-sohoa.vnecdn.net/2023/04/30/telegramDSC0880711581682848534-1890-9541-1682851458.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=ppEwiqUIiTvOo6y2iW4TJQ 1x, https://vcdn1-sohoa.vnecdn.net/2023/04/30/telegramDSC0880711581682848534-1890-9541-1682851458.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=r-WxQPVcoLuPrmON8Ks9ZQ 2x"></picture></a></p>
</article>
</div>
</article>`;

const comments = [
  'Nhân vật Phùng trong truyện Chiếc thuyền ngoài xa tạo cho tôi một cảm giác đồng cảm mạnh mẽ, với cuộc đời bất hạnh nhưng vẫn kiên cường và lạc quan.',
  'Phùng là một nhân vật đầy sâu sắc, hành trình tìm kiếm hạnh phúc của cô làm tôi suy tư về ý nghĩa thực sự của cuộc sống.',
  'Từng trải qua biết bao khó khăn và thử thách, Phùng đã giúp tôi nhận ra rằng cuộc sống không phải lúc nào cũng suôn sẻ, nhưng quan trọng là không bỏ cuộc.',
  'Sự mạnh mẽ và quyết tâm của Phùng khiến tôi không thể không ngưỡng mộ, cô là một nguồn động lực lớn cho tôi.',
  'Nhân vật Phùng trong truyện thể hiện tình yêu thương chân thành và sự hi sinh vô điều kiện, điều đó khiến tôi cảm động.',
  'Trái tim ấm áp và tấm lòng nhân hậu của Phùng đã khiến tôi xem lại bản thân và suy tư về ý nghĩa thực sự của cuộc sống.',
  'Cuộc sống của Phùng là một hành trình đầy biến đổi, nhưng cô luôn kiên nhẫn và kiên định đi đến cuối con đường.',
  'Tôi yêu thích nhân vật Phùng bởi cách cô luôn tìm thấy niềm vui và ý nghĩa trong những điều giản đơn nhất.',
  'Nhân vật Phùng trong truyện đã làm tôi nhận ra rằng không có gì quý giá hơn gia đình và tình thương thân mật.',
  'Phùng là một nhân vật vô cùng thú vị và đáng yêu, tôi đã rơi vào câu chuyện của cô và không thể dứt ra khỏi.',
];

async function main() {
  // create two dummy articles
  await prisma.setting.deleteMany();
  await prisma.literaryCategory.deleteMany();
  await prisma.postReaction.deleteMany();
  await prisma.postTag.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.category.deleteMany();
  await prisma.post.deleteMany();
  await prisma.literary.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.user.deleteMany();
  const tmpArr = Array.from({ length: 20 });

  await prisma.user.createMany({
    data: tmpArr.map((e, i) => ({
      userId: ++i,
      name: 'Tuấn Hùng ' + (i == 1 ? '' : i),
      slug: 'tuan-hung-' + (i == 1 ? '' : i),
      avatarImage:
        'https://i.pinimg.com/originals/d4/b9/27/d4b927049e2f8f0760239c475a9d200b.jpg',
      role: Math.random() > 0.8 ? 'ADMIN' : 'VIEWER',
      status: Math.random() > 0.8 ? 'BANNED' : 'ACTIVE',
      email: (i == 1 ? '' : i) + 'tuanhung592001@gmail.com',
      password: '$2b$10$O/UxP2LOsMpGuPFc2DE0AeSiYFIVZ2e8GSzMDcUUAQtGhENhnXqxy',
    })),
  });
  await prisma.literary.createMany({
    data: tmpArr.map((e, i) => ({
      literaryId: ++i,
      title: 'Tấm cám ' + i,
      timeOfCreation: 'Mùa thu 1975',
      authorName: 'Khuyết danh',
      intro: `Tấm Cám (chữ Nôm: 糝𥽇) là một câu chuyện cổ tích Việt Nam thuộc thể loại truyện cổ
      tích thần kì. Dù có nhiều dị bản, câu chuyện này phản ánh những mâu thuẫn trong gia
      đình, đặc biệt là mối quan hệ mẹ kế - con chồng.`,
      summary: `Tấm Cám là câu chuyện dân gian kể về hai chị em Tấm Cám. Tấm mồ côi mẹ từ nhỏ sống với mẹ
                con dì ghẻ và Cám. Mẹ con Cám thường xuyên hành hạ đối xử bất công với Tấm. Khi thì cướp hết
                cá mà Tấm bắt được, khi thì lại giết hại cả bống bạn của Tấm, lúc lại không cho Tấm đi trẩy
                hội, bắt Tấm ở nhà nhặt thóc và gạo. Tuy nhiên khi được Bụt giúp đỡ Tấm đã được đi chơi hội
                và gặp gỡ nhà vua. Khi trở về từ dạ tiệc Tấm đánh rơi chiếc hài và nhà vua theo đó mà tìm
                được người để cưới về làm vợ. Tấm trở thành hoàng hậu, điều đó làm mẹ con Cám ganh ghét và
                lập mưu giết hại Tấm. Nhưng Tấm đã hóa thành chim vàng anh, cây xoan đào, khung cửi, quả
                thị. Và cuối cùng Tấm gặp lại nhà vua và sống trong cung hạnh phúc đến suốt đời. Còn mẹ con
                Cám phải chịu báo ứng vì những tội ác mà mình đã gây ra.`,
      slug: 'tam-cam' + i,
      image: 'https://i.ibb.co/W2zv6HF/T-m-C-m-1-removebg-preview.png',
      featured: Math.random() > 0.8,
      visibility: Math.random() > 0.3,
      createdAt: new Date(new Date().getTime() + i * 100000),
      updatedAt: new Date(new Date().getTime() + i * 100000),
      view: Math.round(Math.random() * 10000),
      postCount: Math.round(Math.random() * 100),
      createdBy: 1,
    })),
  });
  await prisma.tag.createMany({
    data: [
      {
        tagId: 1,
        tagName: 'tam',
        slug: 'tam',
        createdAt: new Date(new Date().getTime() - 1 * 100000),
        updatedAt: new Date(new Date().getTime() - 1 * 100000),
        usedCount: 32,
        createdBy: 1,
      },
      {
        tagId: 2,
        tagName: 'cam',
        slug: 'cam',
        createdAt: new Date(new Date().getTime() + 2 * 100000),
        updatedAt: new Date(new Date().getTime() + 2 * 100000),
        usedCount: 25,
        createdBy: 1,
      },
    ],
  });

  await prisma.category.createMany({
    data: [
      {
        categoryId: 1,
        categoryName: 'Truyện cổ tích',
        slug: 'truyen-co-tich',
        createdAt: new Date(new Date().getTime() - 1 * 100000),
        updatedAt: new Date(new Date().getTime() - 1 * 100000),
        createdBy: 1,
      },
      {
        categoryId: 2,
        categoryName: 'Truyện ngắn',
        slug: 'truyen-ngan',
        createdAt: new Date(new Date().getTime() + 2 * 100000),
        updatedAt: new Date(new Date().getTime() + 2 * 100000),
        createdBy: 1,
      },
    ],
  });
  await prisma.post.createMany({
    data: tmpArr.map((e, i) => ({
      postId: ++i,
      title:
        'Phân tích nhân vật nhiếp ảnh gia Phùng trong truyện ngắn Chiếc thuyền ngoài xa.' +
        i,
      summary:
        'Phân tích nhân vật nhiếp ảnh gia Phùng trong truyện ngắn Chiếc thuyền ngoài xa.Phân tích nhân vật nhiếp ảnh gia Phùng trong truyện ngắn Chiếc thuyền ngoài xa.Phân tích nhân vật nhiếp ảnh gia Phùng trong truyện ngắn Chiếc thuyền ngoài xa.',
      slug: 'phan-tich-nhan-vat-phung-' + i,
      htmlContent: content,
      featuredImage:
        'https://vnkings.com/wp-content/uploads/2021/04/maxresdefault.jpg',
      featured: Math.random() > 0.8,
      status: Math.random() > 0.9 ? 'DRAFT' : 'PUBLISHED',
      createdAt: new Date(new Date().getTime() + -i * 10000000),
      updatedAt: new Date(new Date().getTime() + -i * 10000000),
      view: Math.round(Math.random() * 10000),
      likeCount: Math.round(Math.random() * 1000),
      dislikeCount: Math.round(Math.random() * 100),
      createdBy: (Math.round(Math.random() * 100) % 4) + 1,
      literary: Math.random() > 0.5 ? tmpArr.length : tmpArr.length - 1,
    })),
  });

  tmpArr.map(async (e, k) => {
    await prisma.comment.createMany({
      data: comments.map((cmt, i) => ({
        commentId: k * 10 + ++i,
        content: cmt,
        createdBy: (Math.round(Math.random() * 100) % tmpArr.length) + 1,
        postId: k + 1,
        createdAt: new Date(
          new Date().getTime() - Math.round(Math.random() * 10000000),
        ),
      })),
    });
  });

  await prisma.postTag.createMany({
    data: tmpArr.map((e, i) => ({
      postId: ++i,
      tagId: (i % 2) + 1,
    })),
  });
  await prisma.literaryCategory.createMany({
    data: tmpArr.map((e, i) => ({
      literaryId: ++i,
      categoryId: (i % 2) + 1,
    })),
  });
  await prisma.advertisement.createMany({
    data: [
      {
        advertisementId: 1,
        title: 'Học bổng Úc',
        description: 'Học bổng úc trọn gói, thi đánh giá năng lực',
        image: '',
        displayPosition: ad_display_position.HOME,
        target: '#hocbonguc',
        startDate: new Date(),
        endDate: new Date(new Date().getTime() + 60 * 60 * 24 * 15 * 1000),
        impressionCount: 1523,
        clickCount: 231,
        price: Math.random().toFixed(3),
        createdBy: 1,
      },
      {
        advertisementId: 2,
        title: 'Học bổng Anh',
        description: 'Học bổng Anh trọn gói, thi đánh giá năng lực',
        image: '',
        displayPosition: ad_display_position.SEARCH,
        target: '#hocbonganh',
        startDate: new Date(new Date().getTime() + 60 * 60 * 24 * 15 * 1000),
        endDate: new Date(new Date().getTime() + 60 * 60 * 24 * 15 * 1000),
        impressionCount: 865,
        clickCount: 152,
        visibility: false,

        price: Math.random().toFixed(3),
        createdBy: 1,
      },
    ],
  });

  await prisma.setting.createMany({
    data: [{ settingId: 1 }, { settingId: 2 }],
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
