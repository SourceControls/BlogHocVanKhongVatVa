// prisma/seed.ts

import { ad_display_position, PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

const comments = [
  'Nhân vật trong truyện tạo cho tôi một cảm giác đồng cảm mạnh mẽ, với cuộc đời bất hạnh nhưng vẫn kiên cường và lạc quan.',
  'Nhật vật chính là một nhân vật đầy sâu sắc, hành trình tìm kiếm hạnh phúc của cô làm tôi suy tư về ý nghĩa thực sự của cuộc sống.',
  'Từng trải qua biết bao khó khăn và thử thách, Nhật vật chính đã giúp tôi nhận ra rằng cuộc sống không phải lúc nào cũng suôn sẻ, nhưng quan trọng là không bỏ cuộc.',
  'Sự mạnh mẽ và quyết tâm của Nhật vật chính khiến tôi không thể không ngưỡng mộ, cô là một nguồn động lực lớn cho tôi.',
  'Nhân vật Nhật vật chính trong truyện thể hiện tình yêu thương chân thành và sự hi sinh vô điều kiện, điều đó khiến tôi cảm động.',
  'Trái tim ấm áp và tấm lòng nhân hậu của Nhật vật chính đã khiến tôi xem lại bản thân và suy tư về ý nghĩa thực sự của cuộc sống.',
  'Cuộc sống của Nhật vật chính là một hành trình đầy biến đổi, nhưng cô luôn kiên nhẫn và kiên định đi đến cuối con đường.',
  'Tôi yêu thích nhân vật Nhật vật chính bởi cách cô luôn tìm thấy niềm vui và ý nghĩa trong những điều giản đơn nhất.',
  'Nhân vật Nhật vật chính trong truyện đã làm tôi nhận ra rằng không có gì quý giá hơn gia đình và tình thương thân mật.',
  'Nhật vật chính là một nhân vật vô cùng thú vị và đáng yêu, tôi đã rơi vào câu chuyện của cô và không thể dứt ra khỏi.',
];

async function main() {
  // create two dummy articles
  await prisma.setting.deleteMany();
  await prisma.literaryCategory.deleteMany();
  await prisma.advertisement.deleteMany();
  await prisma.postReaction.deleteMany();
  await prisma.postTag.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.category.deleteMany();
  await prisma.post.deleteMany();
  await prisma.literary.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.user.deleteMany();
  const tmpArr = Array.from({ length: 4 });

  await prisma.user.createMany({
    data: [
      {
        userId: 3,
        name: 'Tuấn Hùng Viewer',
        slug: 'tuan-hung-viewer',
        avatarImage:
          'https://i.ibb.co/vP05vCF/d4b927049e2f8f0760239c475a9d200b-cleanup.png',
        role: 'VIEWER',
        email: 'hungbuituan1@gmail.com',
        website: 'https://www.facebook.com/TuanHung.fb/',
        password:
          '$2b$10$O/UxP2LOsMpGuPFc2DE0AeSiYFIVZ2e8GSzMDcUUAQtGhENhnXqxy',
      },
      {
        userId: 2,
        name: 'Tuấn Hùng Contributor',
        slug: 'tuan-hung-contributor',
        avatarImage:
          'https://i.ibb.co/vP05vCF/d4b927049e2f8f0760239c475a9d200b-cleanup.png',
        role: 'CONTRIBUTOR',
        email: 'buituanhung80@gmail.com',
        website: 'https://www.facebook.com/TuanHung.fb/',
        password:
          '$2b$10$O/UxP2LOsMpGuPFc2DE0AeSiYFIVZ2e8GSzMDcUUAQtGhENhnXqxy',
      },
      {
        userId: 1,
        name: 'Tuấn Hùng SAD',
        slug: 'tuan-hung-sad',
        avatarImage:
          'https://i.ibb.co/vP05vCF/d4b927049e2f8f0760239c475a9d200b-cleanup.png',
        role: 'SUPERADMIN',
        email: 'tuanhung592001@gmail.com',
        website: 'https://www.facebook.com/TuanHung.fb/',
        password:
          '$2b$10$O/UxP2LOsMpGuPFc2DE0AeSiYFIVZ2e8GSzMDcUUAQtGhENhnXqxy',
      },
    ],
  });
  await prisma.literary.createMany({
    data: [
      {
        literaryId: 1,
        title: 'Tấm cám',
        timeOfCreation: 'Không được ghi chép',
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
        slug: 'tam-cam',
        image: 'https://i.ibb.co/k9LKW75/TC.png',
        featured: true,
        view: Math.round(Math.random() * 10000),
        createdBy: 1,
      },
      {
        literaryId: 2,
        title: 'Tây tiến',
        timeOfCreation: 'Cuối năm 1948 tại Phù Lưu Chanh',
        authorName: 'Quang Dũng',
        intro: `Trung đoàn Tây Tiến" là tên một đơn vị quân đội được thành lập năm 1947, nơi mà Quang Dũng làm chức vụ Đại đội trưởng ở tiểu đoàn 212, có nhiệm vụ phối hợp với quân đội Lào chống quân đội của thực dân Pháp trong thời kỳ Kháng chiến chống Pháp (1945-1954). Chiến sĩ trong đoàn quân này phần đông là thanh niên Hà Nội, trong đó có nhiều học sinh, sinh viên (như nhà thơ Quang Dũng). Chiến đấu khắp các địa bàn thuộc tỉnh Sơn La, Lai Châu, Hòa Bình, miền Tây Thanh Hóa, Sầm Nưa (Lào), trong những hoàn cảnh rất gian khổ, vô cùng thiếu thốn, bệnh sốt rét hoành hành dữ dội, nhưng "họ sống rất lạc quan và chiến đấu dũng cảm`,
        summary: `Bài thơ "Tây Tiến" của Quang Dũng thể hiện tinh thần chiến đấu của người lính trong cuộc chiến tranh, đồng thời là biểu tượng cho tình yêu quê hương và lòng dũng cảm trong những thời khắc khó khăn. Dưới đây là một phân tích ngắn về bài thơ này:
Biểu Tượng Quốc Gia: "Tây Tiến" được viết trong bối cảnh chiến tranh, nơi tinh thần chiến đấu của người lính cần được động viên và tôn vinh. Bài thơ toả sáng tình yêu quê hương và sự kiên nhẫn trong việc bảo vệ đất nước.
Sự Hy Sinh và Quyết Tâm: Bài thơ tả hiện sự hy sinh không đợi đến ngày mai mà chấp nhận trong ngày hôm nay. Đây là tinh thần mạnh mẽ của người lính, sẵn sàng đối mặt với khó khăn và nguy hiểm để bảo vệ quê hương.
Tôn Vinh Người Lính: Bài thơ khen ngợi tinh thần dũng cảm, đồng lòng của người lính. Họ là những người anh hùng đang "gác kiếm" để bảo vệ quê hương, tạo nên tấm gương để nhớ và ngưỡng mộ.
Khát Vọng Chiến Thắng: Bài thơ thể hiện khát vọng chiến thắng của người lính, với hi vọng trỗi dậy bất chấp khó khăn. Đó là lời kêu gọi cùng nhau "lên" để đối phó với mọi thử thách.
Tinh Thần Đoàn Kết: Bài thơ truyền đạt tinh thần đoàn kết của mọi người, khi họ sát cánh, đồng lòng hướng tới mục tiêu chung - giữ vững quê hương.`,
        slug: 'tay-tien',
        image: 'https://i.ibb.co/TwNr9vm/TT.png',
        featured: true,
        view: Math.round(Math.random() * 10000),
        createdBy: 1,
      },
      {
        literaryId: 3,
        title: 'Sóng',
        timeOfCreation:
          'Năm  1967 trong chuyến đi thực tế ở vùng biển Diêm Điền (Thái Bình)',
        authorName: 'Xuân Quỳnh',
        intro: `Qua hình tượng sóng, trên cơ sở khám phá sự tương đồng, hòa hợp giữa sóng và em, bài thơ diễn tả tình yêu của người phụ nữ thiết tha, nồng nàn, chung thủy, muốn vượt lên thử thách của thời gian và sự hữu hạn của đời người. Từ đó thấy được tình yêu là một thứ tình cảm cao đẹp, một hạnh phúc lớn lao của con người.`,
        summary: `Bài thơ "Sóng" của Xuân Quỳnh là một tác phẩm thể hiện tâm trạng biến đổi và xao lãng của người phụ nữ đang đối diện với cuộc sống khó khăn và những biến cố trong gia đình. Dưới đây là một phân tích ngắn về bài thơ này:
Biểu Tượng Tâm Trạng: "Sóng" thể hiện tâm trạng của người phụ nữ thông qua hình ảnh của sóng biển đang xao động. Sóng biển tượng trưng cho cuộc đời với những biến đổi không ngừng, và tâm hồn của người phụ nữ cũng theo đó mà biến đổi.
Khao Khát Tự Do: Hình ảnh sóng biển được sử dụng để thể hiện khao khát tự do của người phụ nữ. Cô khát khao một cuộc sống tự do và không bị ràng buộc bởi những áp lực xã hội và gia đình.
Tâm Trạng Xao Lãng: Bài thơ mô tả tâm trạng xao lãng và biến đổi của người phụ nữ thông qua việc sử dụng những hình ảnh như "mắt xanh xao" và "nón mỏng phai". Điều này thể hiện sự không ổn định và sự mất cân đối trong tâm hồn cô.
Mong Muốn Vượt Qua: Người phụ nữ trong bài thơ mang trong mình khao khát vượt qua những biến đổi và khó khăn. Cô mong muốn có thể tìm thấy sự yên bình và tự do bên trong mình.
Tương Quan Gia Đình: Bài thơ cũng đề cập đến tương quan gia đình khi người phụ nữ đối mặt với "ông xã và bọn con". Đây có thể thể hiện sự chịu đựng và gánh vác trách nhiệm trong gia đình.`,
        slug: 'song',
        image: 'https://i.ibb.co/7gLhmrk/S.png',
        featured: true,
        view: Math.round(Math.random() * 10000),
        createdBy: 1,
      },
      {
        literaryId: 4,
        title: 'Tắt đèn',
        timeOfCreation: 'Không được ghi chép',
        authorName: 'Ngô Tất Tố',
        intro: `Đây là một tác phẩm văn học hiện thực phê phán với nội dung nói về cuộc sống khốn khổ của tầng lớp nông dân Việt Nam đầu thế kỉ XX dưới ách đô hộ của thực dân Pháp.Tắt đèn gồm 26 chương, trong đó chương XVIII của tác phẩm là 1 trong những tác phẩm được học trong chương trình Ngữ văn 8 tập 1 do Nhà xuất bản giáo dục Việt Nam phát hành với tựa đề "Tức nước vỡ bờ".`,
        summary: `Tác phẩm kể về nhân vật chính là chị Dậu. Trước khi lấy chồng chị có tên là Lê Thị Đào, một cô gái đẹp, giỏi giang, tháo vát và (theo nhà văn) sinh ra trong gia đình trung lưu.
Vốn lúc đầu, gia cảnh anh chị Dậu có dư giả, nhưng vì liền lúc mẹ và em trai anh Dậu cùng qua đời, anh chị dù đã hết sức cần kiệm nhưng vẫn phải tiêu quá nhiều tiền cho hai đám ma. Chưa hết, sau khi đám ma cho em trai xong, anh Dậu bỗng mắc bệnh sốt rét, không làm gì được, mọi vất vả dồn lên vai chị Dậu, khiến gia cảnh lâm vào cảnh 'nhất nhì trong hạng cùng đinh trong làng.
Mùa sưu đến, chị Dậu phải chạy vạy khắp nơi vay tiền để nộp cho chồng, nhưng không kiếm đâu ra. Anh Dậu dù bị ốm nhưng vẫn bị bọn cai lệ cùm kẹp lôi ra giam ở đình làng. Cuối cùng, bần cùng quá, chị buộc lòng phải dứt ruột bán đi cái Tí, đứa con gái đầu lòng 7 tuổi ngoan ngoãn, hiếu thảo và ổ chó mới đẻ chưa kịp mở mắt cho vợ chồng lão Nghị Quế bên thôn Đoài để lấy hai đồng nộp sưu. Nhưng vừa đủ tiền nộp xong suất sưu cho chồng, bọn cai trong làng lại ép chị nộp cả tiền sưu cho em trai anh Dậu với lý do chết ở năm ta nhưng lúc đó lịch năm tây đã sang năm mới. Vậy là anh Dậu vẫn bị bắt không được về nhà.
Nửa đêm, anh Dậu dở sống dở chết được đưa về. Được bà con lối xóm giúp đỡ, anh dần tỉnh lại. Một bà lão hàng xóm ái ngại cảnh nhà chị nhịn đói suốt từ hôm qua, mang đến cho chị bát gạo nấu cháo để anh ăn lại sức. Nhưng vừa kề bát cháo lên miệng, bọn cai lệ và người nhà lí trưởng ập vào ép sưu. Chị Dậu ra sức van xin không được, cuối cùng uất ức quá không thể chịu được nữa, chị đã ra tay đánh cả cai lệ và tên người nhà lý trưởng.
Phạm tội đánh người nhà nước, chị bị thúc giải lên quan. Tên quan huyện lại là tên dâm ô, định ra tay sàm sỡ chị. Chị bèn vứt tọt nắm bạc vào mặt hắn rồi vùng chạy.
Sau đó, chị may mắn gặp một người nhà quan cụ trên tỉnh. Người này cho chị 2 đồng nộp nốt tiền sưu và hứa hẹn cho chị công việc vắt sữa của mình để quan cụ uống (do quan cụ đã rụng hết răng không ăn được cơm). Chị bèn về bàn với anh Dậu, cho cái Tỉu làm con nuôi nhà hàng xóm, lên tỉnh làm việc.
Thời gian đầu, chị làm được tiền và gửi về cho anh Dậu. Nhưng vào một đêm tối, quan cụ mò vào buồng của chị định giở trò đồi bại với chị... Tác phẩm kết thúc bằng câu "Chị vùng chạy ra ngoài giữa lúc trời tối đen mực, đen như cái tiền đồ của chị vậy!"`,
        slug: 'tat-den',
        image: 'https://i.ibb.co/DDYphMw/TD.png',
        featured: true,
        view: Math.round(Math.random() * 10000),
        createdBy: 1,
      },
      {
        literaryId: 5,
        title: 'Chiếc thuyền ngoài xa',
        timeOfCreation: 'Tháng 09 - 1983',
        authorName: 'Nguyễn Minh Châu',
        intro: `Truyện in đậm phong cách tự sự - triết lý của Nguyễn Minh Châu, rất tiêu biểu cho hướng tiếp cận đời sống từ góc độ thế sự của nhà văn ở giai đoạn sáng tác thứ hai.
        Truyện ngắn lúc đầu được in trong tập Bến quê (1985), sau được nhà văn lấy làm tên chung cho một tuyển tập truyện ngắn (in năm 1987).`,
        summary: `Nhận nhiệm vụ từ trưởng phòng, Phùng phải đi về miền Trung thực hiện bộ ảnh để chào đón năm mới. Đây cũng là địa điểm mà anh từng tham chiến trong thời gian chống Mỹ. Sau một tuần “phục kích” và phát hiện ra “cảnh đắt trời cho” Phùng quyết định chọn chủ đề cho bộ lịch đó là chiếc thuyền đánh cá trong một buổi sáng bình minh. Khi đã hoàn thành bộ ảnh, anh quay về thì chứng kiến cảnh tượng người đàn ông hàng chài to lớn đang đánh đập người phụ nữ. Đứa con tên Phác chạy ra can ngăn. Cứ thế cảnh tượng đó diễn ra liên tiếp, không thể chịu được, Phùng quyết định ngăn cản thì bị người đàn ông đánh bị thương. Ngay sau đó, chánh án Đẩu - bạn của Phùng mời người đàn bà hàng chài lên tòa án huyện để giải quyết. Tại đây Đẩu khuyên người đàn bà hàng chài bỏ người chồng vũ phu kia. Người đàn bà giải thích lý do vì sao chồng đánh và kể về người chồng của mình. Phùng và Đẩu hiểu ra rằng mặc cho bị ngược đãi về thể xác nhưng cả người đàn bà và những đứa con cần người đàn ông gánh vác trách nhiệm và nuôi sống gia đình. Phùng nhận ra nhìn nhận mọi việc đơn giản bằng vẻ ngoài không thôi thì chưa đủ.`,
        slug: 'chiec-thuyen-ngoai-xa',
        image: 'https://i.ibb.co/bFmDPX1/CTNX.png',
        featured: true,
        view: Math.round(Math.random() * 10000),
        createdBy: 1,
      },
    ],
  });
  await prisma.tag.createMany({
    data: [
      {
        tagId: 1,
        tagName: 'tamcam',
        slug: 'tamcam',
        createdBy: 1,
      },
      {
        tagId: 2,
        tagName: 'tatden',
        slug: 'tatden',
        createdBy: 1,
      },
      {
        tagId: 3,
        tagName: 'taytien',
        slug: 'taytien',
        createdBy: 1,
      },
      {
        tagId: 4,
        tagName: 'song',
        slug: 'song',
        createdBy: 1,
      },
      {
        tagId: 5,
        tagName: 'chiecthuyenngoaixa',
        slug: 'chiecthuyenngoaixa',
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
        createdBy: 1,
      },
      {
        categoryId: 2,
        categoryName: 'Truyện ngắn',
        slug: 'truyen-ngan',
        createdBy: 1,
      },
      {
        categoryId: 3,
        categoryName: 'Thơ',
        slug: 'tho',
        createdBy: 1,
      },
      {
        categoryId: 4,
        categoryName: 'Tiểu thuyết',
        slug: 'tieu-thuyet',
        createdBy: 1,
      },
    ],
  });
  await prisma.post.createMany({
    data: [
      {
        postId: 1,
        title: 'Phân tích nhân vật Tấm trong truyện Tấm Cám',
        slug: 'phan-tich-nhan-vat-tam-trong-truyen-tam-cam',
        summary:
          'Tấm và Cám là hai chị em cùng cha khác mẹ. Mẹ Tấm chết từ hồi Tấm mới biết đi, sau đó ít năm người cha cũng chết, Tấm phải sống với dì ghẻ là mẹ của Cám. Ngay từ đầu tác phẩm, tác giả dân gian đã đưa người đọc đến số phận quen thuộc trong truyện cổ tích',
        htmlContent: `<p style="text-align: justify;">Trong kho t&agrave;ng văn học Việt Nam ngo&agrave;i những t&aacute;c phẩm truyện k&iacute;, thơ, ph&uacute;, c&aacute;o&hellip;được nhiều người nhắc đến th&igrave; ch&uacute;ng ta c&ograve;n n&ecirc;n nhớ đến một thể loại m&agrave; c&aacute;c bạn thiếu nhi hay th&iacute;ch nghe. Đ&oacute; ch&iacute;nh l&agrave; thể loại truyện cổ t&iacute;ch. C&oacute; thể n&oacute;i những c&acirc;u chuyện cổ t&iacute;ch như mang hơi thở ngọt ng&agrave;o của những quan niệm xưa như ở hiền gặp l&agrave;nh, n&oacute; l&agrave; loại truyện m&agrave; d&agrave;nh cho trẻ em l&agrave; nhiều nhất v&igrave; n&oacute; mang những yếu tố k&igrave; ảo lạ thường để cho trẻ em thỏa sức tưởng tượng. Đồng thời n&oacute; c&ograve;n c&oacute; những c&aacute;i kết c&oacute; hậu để dạy dỗ trẻ em l&agrave;m người tốt. Trong những t&aacute;c phẩm truyện cổ t&iacute;ch như Thạch Sanh, Sọ Dừa&hellip; th&igrave; c&oacute; lẽ truyện &ldquo;Tấm C&aacute;m&rdquo; cũng hấp dẫn biết bao nhi&ecirc;u bạn đọc kh&ocirc;ng chỉ trẻ con m&agrave; cả người lớn. Đặc biệt trong đ&oacute; ta thấy nổi bật l&ecirc;n h&igrave;nh tượng nh&acirc;n vật c&ocirc; Tấm với những vẻ đẹp của người con g&aacute;i thuở xưa.</p>
 <p style="text-align: justify;">Tấm v&agrave; C&aacute;m l&agrave; hai chị em c&ugrave;ng cha kh&aacute;c mẹ. Mẹ Tấm chết từ hồi Tấm mới biết đi, sau đ&oacute; &iacute;t năm người cha cũng chết, Tấm phải sống với d&igrave; ghẻ l&agrave; mẹ của C&aacute;m. Ngay từ đầu t&aacute;c phẩm, t&aacute;c giả d&acirc;n gian đ&atilde; đưa người đọc đến số phận quen thuộc trong truyện cổ t&iacute;ch. Ở với d&igrave; ghẻ, Tấm phải l&agrave;m lụng quần quật suốt ng&agrave;y đ&ecirc;m, từ chăn tr&acirc;u, g&aacute;nh nước đến th&aacute;i khoai, vớt b&egrave;o, đ&ecirc;m xay l&uacute;a gi&atilde; gạo m&agrave; kh&ocirc;ng hết việc. Trong khi đ&oacute;, C&aacute;m v&agrave; mụ d&igrave; ghẻ th&igrave; ăn trắng mặc trơn, kh&ocirc;ng phải nh&uacute;ng tay v&agrave;o việc g&igrave;. Sự h&agrave;nh hạ của mẹ con C&aacute;m kh&ocirc;ng chỉ ở thể chất m&agrave; c&ograve;n về tinh thần. C&aacute;m lừa Tấm tr&uacute;t hết giỏ t&eacute;p để gi&agrave;nh phần thưởng l&agrave; chiếc yếm đỏ. Chiếc yếm đỏ l&agrave; y phục m&agrave; c&aacute;c thiếu nữ thời xưa lớn l&ecirc;n đều ao ước. Với c&ocirc; Tấm ngh&egrave;o kh&oacute;, mồ c&ocirc;i n&oacute; c&agrave;ng trở n&ecirc;n qu&yacute; gi&aacute;. Bởi vậy mất chiếc yếm đỏ cũng c&oacute; nghĩa l&agrave; Tấm mất đi hy vọng được nhận y&ecirc;u thương. Con c&aacute; bống c&ograve;n s&oacute;t lại trong giỏ cũng bị mẹ con d&igrave; ghẻ giết thịt.. Với một c&ocirc; g&aacute;i mồ c&ocirc;i, kh&ocirc;ng nhận được sự chăm s&oacute;c n&agrave;o th&igrave; chăm ch&uacute;t cho bống l&agrave; một nhu cầu t&igrave;nh cảm, nhu cầu được sẻ chia. Việc mẹ con C&aacute;m giết bống đ&atilde; ph&aacute; đi chỗ dựa t&igrave;nh cảm, cướp đi hy vọng vừa mới nhen l&ecirc;n trong l&ograve;ng Tấm. Lần thứ ba Tấm kh&oacute;c l&agrave; khi c&ocirc; kh&ocirc;ng được đi dự hội l&agrave;ng, tước đoạt ở Tấm cơ hội được gặp gỡ, chia sẻ với mọi người. Cuộc đời của Tấm l&agrave; hiện th&acirc;n của cuộc đời bị đ&agrave;y đọa, một h&igrave;nh ảnh ti&ecirc;u biểu cho những số phận thấp cổ b&eacute; họng, chịu nhiều thiệt th&ograve;i trong x&atilde; hội ph&acirc;n chia giai cấp. Bởi vậy tiếng kh&oacute;c tội nghiệp của Tấm c&oacute; sức lay động bao tr&aacute;i tim nh&acirc;n hậu, khơi gợi niềm cảm th&ocirc;ng, chia sẻ của mọi người.</p>
 <p style="text-align: justify;"><img src="https://cdn.tgdd.vn/Files/2022/08/12/1455650/loi-ke-va-y-nghia-cua-cau-truyen-co-tich-noi-tieng-tam-cam-202208120837328357.jpg" alt="Lời kể v&agrave; &yacute; nghĩa của c&acirc;u truyện cổ t&iacute;ch nổi tiếng Tấm C&aacute;m"></p>
 <p style="text-align: justify;">Đặc trưng của truyện cổ t&iacute;ch thường giải quyết mối xung đột thiện &ndash; &aacute;c theo hướng thiện thắng &aacute;c nhờ sự gi&uacute;p đỡ của những nh&acirc;n vật thần k&igrave;. C&ocirc; Tấm hiền l&agrave;nh, chăm chỉ, tốt bụng n&ecirc;n được Bụt gi&uacute;p đỡ. Tấm mất yếm đ&agrave;o, Bụt cho hy vọng l&agrave; con c&aacute; bống. Mất c&aacute; bống, Bụt cho hi vọng đổi đời. Tấm kh&ocirc;ng được đi hội, Bụt cho đ&agrave;n chim sẻ xuống gi&uacute;p Tấm. Bụt cho Tấm quần &aacute;o đẹp, gi&agrave;y đẹp, đưa Tấm đến gặp nh&agrave; vua, gi&uacute;p Tấm trở th&agrave;nh Ho&agrave;ng Hậu, đạt đến đỉnh cao của hạnh ph&uacute;c. Ho&agrave;ng Hậu Tấm l&agrave; h&igrave;nh ảnh cao nhất về hạnh ph&uacute;c m&agrave; nh&acirc;n d&acirc;n c&oacute; thể mơ ước cho c&ocirc; g&aacute;i mồ c&ocirc;i, ngh&egrave;o khổ trong x&atilde; hội xưa. Điều đ&oacute; một mặt phản &aacute;nh ước mơ của d&acirc;n gian về triết l&iacute; &ldquo;Ở hiền gặp l&agrave;nh&rdquo; v&agrave; ước mơ về một sự đổi đời. Từ đ&oacute; truyện cổ t&iacute;ch đ&atilde; chữa l&agrave;nh hiện thực cuộc sống, thể hiện tinh thần lạc quan, y&ecirc;u đời, hy vọng ở tương lai c&ocirc;ng bằng, d&acirc;n chủ của nh&acirc;n d&acirc;n lao động.</p>
 <p style="text-align: justify;">Nhưng Tấm C&aacute;m kh&ocirc;ng chỉ đến đ&acirc;y l&agrave; kết th&uacute;c, n&oacute; c&ograve;n tiếp th&ecirc;m một chặng đường nữa của nh&acirc;n vật. Tấm tuy đ&atilde; trở th&agrave;nh Ho&agrave;ng Hậu nhưng vẫn bị c&aacute;i &aacute;c săn đuổi ti&ecirc;u diệt. C&ocirc; Tấm hiếu thảo tr&egrave;o c&acirc;y h&aacute;i cau để c&uacute;ng cha nhưng bị mẹ con C&aacute;m chặt c&acirc;y giết chết. Nhưng c&ocirc; Tấm hiền l&agrave;nh ng&atilde; xuống th&igrave; một c&ocirc; Tấm mạnh mẽ, quyết liệt sống dậy, h&oacute;a th&acirc;n trở về chống lại c&aacute;i &aacute;c. C&acirc;y xoan đ&agrave;o, chim v&agrave;ng anh, c&acirc;y thị l&agrave; nơi Tấm gửi gắm linh hồn, cũng l&agrave; những vật b&igrave;nh dị th&acirc;n thương trong cuộc sống d&acirc;n d&atilde;. Nếu như ở phần đầu c&acirc;u chuyện, mỗi lần Tấm kh&oacute;c th&igrave; lu&ocirc;n c&oacute; Bụt hiện l&ecirc;n gi&uacute;p đỡ, th&igrave; ở phần sau, cuộc đấu tranh &aacute;c liệt hơn nhưng Tấm kh&ocirc;ng c&ograve;n kh&oacute;c, cũng kh&ocirc;ng thấy sự xuất hiện của Bụt, chỉ thấy Tấm h&agrave;nh động li&ecirc;n tiếp để chống lại kẻ th&ugrave;. Sau bao lần h&oacute;a th&acirc;n, Tấm trở về với cuộc đời, với l&agrave;ng qu&ecirc; b&igrave;nh dị, vẫn l&agrave; c&ocirc; g&aacute;i đảm đang trong miếng trầu t&ecirc;m h&igrave;nh c&aacute;nh phượng. Nhờ miếng trầu m&agrave; nh&agrave; vua nhận ra người vợ đảm của m&igrave;nh v&agrave; đưa Tấm về cung. Nhưng Tấm hiểu rằng, kh&ocirc;ng thể c&oacute; hạnh ph&uacute;c trọn vẹn khi c&aacute;i &aacute;c c&ograve;n tồn tại. V&igrave; thế c&ocirc; đ&atilde; tự tay trừng trị mẹ con nh&agrave; C&aacute;m. Kết th&uacute;c đ&oacute; n&ecirc;u cao triết l&iacute; &lsquo;&aacute;c giả &aacute;c b&aacute;o&rdquo; của nh&acirc;n d&acirc;n lao động.</p>
 <p style="text-align: justify;">Qua h&igrave;nh tượng nh&acirc;n vật Tấm qua mọi thời điểm cuộc đời n&agrave;ng ta thấy được vẻ đẹp của người con g&aacute;i thuở xưa hiền l&agrave;nh lương thiện. Đồng thời n&oacute; cũng thể hiện cho quan niệm của &ocirc;ng b&agrave; ta l&agrave; ở hiền th&igrave; gặp l&agrave;nh những người ở hiền th&igrave; c&oacute; cuộc sống hạnh ph&uacute;c những người xấu xa th&igrave; phải chịu những hậu quả m&agrave; m&igrave;nh tự g&acirc;y ra. Kh&ocirc;ng những thế ta c&ograve;n thấy được sự đấu tranh giữa c&aacute;i thiện v&agrave; c&aacute;i &aacute;c v&ocirc; c&ugrave;ng kịch liệt thế nhưng c&aacute;i thiện lu&ocirc;n lu&ocirc;n thắng. V&agrave; con đường đến c&aacute;i thiện để hạnh ph&uacute;c l&agrave; một qu&aacute; tr&igrave;nh gian nan vất vả.</p>`,
        featuredImage: 'https://img.idesign.vn/2019/12/id-tamcam-cover-1.jpg',
        featured: true,
        status: 'PUBLISHED',
        view: Math.round(Math.random() * 10000),
        likeCount: Math.round(Math.random() * 1000),
        dislikeCount: Math.round(Math.random() * 100),
        createdBy: 1,
        literary: 1,
      },
      {
        postId: 2,
        title: 'Phân tích bài thơ Tây Tiến của nhà thơ Quang Dũng',
        slug: 'phan-tich-bai-tho-tay-tien-cua-nha-tho-quang-dung',
        summary:
          'Quang Dũng thuộc lớp nhà thơ trưởng thành từ kháng chiến chống Pháp. Không chỉ viết thơ hay, ông còn được biết đến là một nghệ sĩ tài năng với khả năng viết văn, soạn nhạc, vẽ tranh. Sinh ra và lớn lên ở Hà Nội, tâm hồn nhà thơ vì thế cũng đầy mơ mộng. Cũng bởi thế mà thơ của ông phóng khoáng mà hồn hậu, lãng mạn và tài hoa.',
        htmlContent: `<p>Kh&aacute;ng chiến ch&ocirc;ng Ph&aacute;p đ&atilde; đi qua, nhưng qua những vần thơ, b&agrave;i h&aacute;t, ch&uacute;ng ta vẫn c&oacute; thể cảm nhận được một qu&aacute; khứ đau thương nhưng h&agrave;o h&ugrave;ng của d&acirc;n tộc. Quang Dũng với t&aacute;c phẩm "T&acirc;y Tiến" đ&atilde; đưa v&agrave;o văn chương kh&aacute;ng chiến một luồn gi&oacute; mới. Th&ocirc;ng qua việc ph&acirc;n t&iacute;ch b&agrave;i thơ T&acirc;y Tiến, ta sẽ thấy được h&igrave;nh ảnh quả cảm, đau thương nhưng đầy mộng mơ của những người l&iacute;nh tri thức bấy giờ.</p>
<p>Quang Dũng thuộc lớp nh&agrave; thơ trưởng th&agrave;nh từ kh&aacute;ng chiến chống Ph&aacute;p. Kh&ocirc;ng chỉ viết thơ hay, &ocirc;ng c&ograve;n được biết đến l&agrave; một nghệ sĩ t&agrave;i năng với khả năng viết văn, soạn nhạc, vẽ tranh. Sinh ra v&agrave; lớn l&ecirc;n ở H&agrave; Nội, t&acirc;m hồn nh&agrave; thơ v&igrave; thế cũng đầy mơ mộng. Cũng bởi thế m&agrave; thơ của &ocirc;ng ph&oacute;ng kho&aacute;ng m&agrave; hồn hậu, l&atilde;ng mạn v&agrave; t&agrave;i hoa.</p>
<p>Mở đầu b&agrave;i thơ, Quang Dũng đ&atilde; tập trung khắc họa lại n&uacute;i rừng T&acirc;y Bắc v&agrave; đo&agrave;n qu&acirc;n T&acirc;y Tiến. Điều đặc biệt l&agrave; khung cảnh ấy hiện về trong k&yacute; ức của người l&iacute;nh trẻ:</p>
<p style="text-align: center;">" S&ocirc;ng M&atilde; xa rồi T&acirc;y Tiến ơi!</p>
<p style="text-align: center;">Nhớ về rừng n&uacute;i nhớ chơi vơi"</p>
<p><img src="https://luattreem.vn/wp-content/uploads/2022/03/tay-tien-1.jpg" alt="B&agrave;i thơ T&acirc;y Tiến (Quang Dũng) &ndash; Nỗi nhớ nhung đồng đội da diết v&agrave; sự hi  sinh lớn lao - Trường Tiểu học Thủ Lệ"></p>
<p>Qua hồi ức của t&aacute;c giả, h&igrave;nh ảnh "S&ocirc;ng M&atilde;", "T&acirc;y Tiến" giờ đ&acirc;y đều như trở th&agrave;nh những người th&acirc;n thương ruột thịt. M&agrave; với nơi đ&acirc;y, Quang Dũng d&agrave;nh trọn vẹn t&igrave;nh cảm nhớ thương&nbsp; của m&igrave;nh. Cụm từ "nhớ chơi vơi" gợi tả một nỗi nhớ rất lạ l&ugrave;ng. Đ&oacute; l&agrave; nỗi nhớ của những người l&iacute;nh đến từ phố thị xa hoa, nỗi nhớ l&agrave;m tim như chững lại, chơi vơi, kh&ocirc;ng c&oacute; điểm dừng. Nỗi nhớ ấy vừa nhẹ nh&agrave;ng, lại vừa m&atilde;nh liệt đến lạ. Dường như n&uacute;i rừng T&acirc;y Bắc đ&atilde; khắc s&acirc;u v&agrave;o t&acirc;m hồn những người l&iacute;nh trẻ biết bao điều. Đ&oacute; l&agrave; những kỷ niệm kh&ocirc;ng&nbsp;bao giờ qu&ecirc;n trong suốt cuộc đời v&agrave; hơn cả, đ&oacute; cũng l&agrave; nỗi trống trải, lạc l&otilde;ng, đậm nỗi nhớ v&agrave; nỗi buồn man m&aacute;c tỏng l&ograve;ng thi sĩ Quang Dũng.</p>
<p>Sau hai c&acirc;u thơ đầu mi&ecirc;u tả nỗi nhớ, h&igrave;nh ảnh n&uacute;i rừng T&acirc;y Bắc v&agrave; con đường h&agrave;nh qu&acirc;n gian khổ của những người l&iacute;nh được mi&ecirc;u tả r&otilde; n&eacute;t. Qua ng&ograve;i b&uacute;t t&agrave;i hoa của Quang Dũng, kh&ocirc;ng gian hiện l&ecirc;n đầy chất thơ:</p>
<p style="text-align: center;">"S&agrave;i Khao sương lấp đo&agrave;n qu&acirc;n mỏi.</p>
<p style="text-align: center;">Mường L&aacute;t hoa về trong đ&ecirc;m hơi."</p>
<p>"S&agrave;i Khao", "Mường L&aacute;t" đều l&agrave; những địa danh gợi nhắc về địa b&agrave;n hoạt động của binh đo&agrave;n T&acirc;y Tiến. N&oacute; c&agrave;ng l&agrave;m nh&acirc;n l&ecirc;n nỗi nhớ "chơi vơi" của t&aacute;c giả với h&igrave;nh ảnh "s&ocirc;ng M&atilde;" ở đầu. Thế nhưng đến đ&acirc;y, kh&ocirc;ng gian đ&atilde; được mở rộng hơn, với nhiều chi tiết khơi gợi kỉ niệm hơn. V&ugrave;ng n&uacute;i S&agrave;i Khao sương giăng k&iacute;n lối, dường như ch&ocirc;n lấp đi h&igrave;nh ảnh "đo&agrave;n qu&acirc;n mỏi" sau chặng đường d&agrave;i. C&ugrave;ng với sự "mỏi" sau chặng h&agrave;ng qu&acirc;n, ngọn đuốc hoa bập b&ugrave;ng trong đ&ecirc;m tối đều l&agrave; những kỉ niệm khơi gợi v&agrave; chứng minh nỗi nhớ v&ocirc; c&ugrave;ng của t&aacute;c giả. Quang Dũng đ&atilde; sử dụng động từ "hoa về" thay v&igrave; "hoa nở", "đ&ecirc;m hơi" chứ kh&ocirc;ng phải "đ&ecirc;m sương". C&aacute;ch kết hợp từ n&agrave;y gợi tả kh&ocirc;ng gian đầy trữ t&igrave;nh, huyền ảo, lung linh như kh&ocirc;ng c&oacute; thực. Giờ đ&acirc;y, nỗi nhớ của nh&agrave; thơ như d&agrave;n trải khắp kh&ocirc;ng gian rộng lớn. Mỗi nơi m&agrave; bước ch&acirc;n người l&iacute;nh đ&atilde; đi qua, họ đều d&agrave;nh những t&igrave;nh cảm y&ecirc;u thương đặc biệt, khiến ch&uacute;ng trở th&agrave;nh những kỷ niệm khắc s&acirc;u trong l&ograve;ng m&atilde;i m&atilde;i kh&ocirc;ng thể qu&ecirc;n.</p>
<p>Địa h&igrave;nh n&uacute;i non hiểm trở "dốc l&ecirc;n kh&uacute;c khuỷu, dốc thăm thẳm" đoạn đường đi cũng chẳng bằng phẳng dễ d&agrave;ng, c&oacute; đoạn l&ecirc;n cao gập ghềnh kh&uacute;c khuỷu, c&oacute; khi lại "thăm thẳm" như vực s&acirc;u chỉ cần một ph&uacute;t lơ đ&atilde;ng người l&iacute;nh c&oacute; thể mất đi mạng sống của m&igrave;nh. Sương d&agrave;y che lấp tầm nh&igrave;n, đường đi nhỏ quanh co lại th&ecirc;m sự trơn trượt của mặt đất, đo&agrave;n qu&acirc;n vẫn đi trong gian khổ từng hạt mưa ph&ugrave;n rơi xuống phảng phất c&aacute;i lạnh buốt. Quang Dũng vận dụng nghệ thuật đối lập một c&aacute;ch t&agrave;i t&igrave;nh để mi&ecirc;u tả sự s&aacute;ng tạo gợi ra trước mắt người đọc khung cảnh thi&ecirc;n nhi&ecirc;n h&ugrave;ng vĩ, hoang vắng, b&iacute; hiểm với đầy rẫy những hiểm nguy "oai linh th&aacute;c gầm th&eacute;t", đ&ecirc;m đ&ecirc;m "cọp tr&ecirc;u người".</p>
<p>Quả l&agrave; một nơi "rừng thi&ecirc;ng nước độc" thế nhưng những kh&oacute; khăn đ&oacute; kh&ocirc;ng thể cản bước ch&acirc;n người l&iacute;nh, họ vẫn đi với sự anh dũng ki&ecirc;n cường v&agrave; trong đ&ocirc;i mắt người l&iacute;nh th&igrave; miền T&acirc;y Bắc lại l&agrave; một v&ugrave;ng đất rất đỗi trữ t&igrave;nh v&agrave; chan chứa t&igrave;nh người. Những h&igrave;nh ảnh "hoa về trong đ&ecirc;m hơi", "mưa xa khơi" thật huyền ảo tạo x&uacute;c cảm thư th&aacute;i, nhẹ nh&agrave;ng cho người đọc. Người d&acirc;n miền T&acirc;y hiện l&ecirc;n thật giản dị, nghĩa t&igrave;nh, họ gắn b&oacute; với c&aacute;ch mạng, y&ecirc;u thương che chở cho những người l&iacute;nh T&acirc;y Tiến.</p>
<p>Bằng b&uacute;t ph&aacute;p t&agrave;i hoa, l&atilde;ng mạn, thi trung hữu nhạc, t&aacute;c giả đ&atilde; l&agrave;m nổi bật vẻ đẹp gi&agrave;u bản sắc văn h&oacute;a, phong tục của đồng b&agrave;o v&ugrave;ng bi&ecirc;n giới c&ugrave;ng t&igrave;nh cảm qu&acirc;n d&acirc;n thắm thiết v&agrave; t&acirc;m hồn lạc quan y&ecirc;u đời, y&ecirc;u cuộc sống của người l&iacute;nh T&acirc;y Tiến.</p>
<p>Tiếp theo, đoạn thơ thứ 3 của b&agrave;i thơ T&acirc;y Tiến đ&atilde; dựng l&ecirc;n bức tượng người l&iacute;nh T&acirc;y Tiến bất tử với thời gian. Đoạn thơ tập trung v&agrave;o khắc họa h&igrave;nh ảnh người l&iacute;nh T&acirc;y Tiến bằng b&uacute;t ph&aacute;p l&atilde;ng mạn nhưng kh&ocirc;ng tho&aacute;t ly hiện thực với cảm x&uacute;c bi tr&aacute;ng. H&igrave;nh ảnh những người chiến sĩ sẵn s&agrave;ng đối mặt với những kh&oacute; khăn, thiếu thốn, bệnh tật: th&acirc;n h&igrave;nh tiều tụy v&igrave; sốt r&eacute;t rừng của người l&iacute;nh T&acirc;y Tiến "kh&ocirc;ng mọc t&oacute;c, xanh m&agrave;u l&aacute;". Trong gian khổ, h&igrave;nh tượng người l&iacute;nh T&acirc;y Tiến vẫn hiện ra với d&aacute;ng vẻ oai phong, lẫm liệt, vẫn to&aacute;t l&ecirc;n cốt c&aacute;ch, kh&iacute; ph&aacute;ch h&agrave;o h&ugrave;ng, mạnh mẽ "xanh m&agrave;u l&aacute;, dữ oai h&ugrave;m". Mặc d&ugrave;, chiến đấu trong gian khổ nhưng c&aacute;c anh qu&acirc;n d&acirc;n vẫn hướng về nhiệm vụ chiến đấu, vẫn "mộng qua bi&ecirc;n giới" - mộng chiến c&ocirc;ng, khao kh&aacute;t lập c&ocirc;ng; "mơ H&agrave; Nội d&aacute;ng kiều thơm" , mơ về, nhớ về d&aacute;ng h&igrave;nh kiều diễm của người thiếu nữ đất H&agrave; th&agrave;nh thanh lịch. Những h&igrave;nh ảnh thơ thể hiện t&acirc;m hồn mộng mơ, l&atilde;ng mạn của người l&iacute;nh - những ch&agrave;ng trai ra đi từ đất H&agrave; Nội thanh lịch. Những giấc "mộng" v&agrave; "mơ" ấy như tiếp th&ecirc;m sức mạnh để c&aacute;c anh vượt gian khổ để lập n&ecirc;n nhiều chiến c&ocirc;ng. Những người l&iacute;nh trẻ trung, h&agrave;o hoa đ&oacute; gửi th&acirc;n m&igrave;nh nơi bi&ecirc;n cương xa x&ocirc;i, sẵn s&agrave;ng tự nguyện hiến d&acirc;ng "đời xanh" cho Tổ quốc m&agrave; kh&ocirc;ng hề tiếc nuối. H&igrave;nh ảnh người l&iacute;nh T&acirc;y Tiến phảng phất vẻ đẹp l&atilde;ng mạn m&agrave; bi tr&aacute;ng của người tr&aacute;ng sĩ anh h&ugrave;ng xưa.</p>
<p>&nbsp;</p>
<p>Khổ thơ cuối c&ugrave;ng, t&aacute;c giả đ&atilde; ca ngợi vẻ đẹp tinh thần của người vệ quốc qu&acirc;n thời k&igrave; đầu kh&aacute;ng chiến: một đi kh&ocirc;ng trở lại, ra đi kh&ocirc;ng hẹn ng&agrave;y về. Vẻ đẹp của người l&iacute;nh T&acirc;y Tiến sẽ c&ograve;n m&atilde;i với thời gian, với lịch sử d&acirc;n tộc, l&agrave; minh chứng đẹp đẽ của thời đại chống thực d&acirc;n ph&aacute;p. Cụm từ người đi kh&ocirc;ng hẹn ước thể hiện tinh thần quyết ra đi kh&ocirc;ng hẹn ng&agrave;y về. H&igrave;nh ảnh đường l&ecirc;n thăm thẳm gợi l&ecirc;n cả một chặng đường gian lao của đo&agrave;n qu&acirc;n T&acirc;y Tiến. Vẻ đẹp bất tử của người l&iacute;nh T&acirc;y Tiến được thể hiện ở &acirc;m hưởng, giọng điệu của cả 4 d&ograve;ng thơ. Chất giọng tho&aacute;ng buồn pha lẫn ch&uacute;t b&acirc;ng khu&acirc;ng, song chủ đạo vẫn l&agrave; giọng h&agrave;o h&ugrave;ng đầy kh&iacute; ph&aacute;ch.</p>
<p>Qua b&igrave;a thơ T&acirc;y Tiến, Quang Dũng đ&atilde; khắc họa được thi&ecirc;n nhi&ecirc;n T&acirc;y Bắc với đầy đủ sắc th&aacute;i kh&aacute;c nhau. Từ đ&oacute; l&agrave;m nổi bật h&igrave;nh tượng người l&iacute;nh T&acirc;y Tiến n&oacute;i ri&ecirc;ng v&agrave; những người l&iacute;nh trẻ n&oacute;i chung. Họ sẵn s&agrave;ng từ bỏ &aacute;nh điện phố thị, bu&ocirc;ng b&uacute;t nơi giảng đường để cầm s&uacute;ng chiến đấu. D&ugrave; kh&oacute; khăn, gian khổ chất chồng th&igrave; sự quyết t&acirc;m, tinh thần lạc quan v&agrave; t&acirc;m hồn mơ mộng vẫn kh&ocirc;ng hề vơi bớt.</p>`,
        featuredImage:
          'https://theki.vn/wp-content/uploads/2019/07/phan-tich-hinh-tuong-nguoi-linh-tay-tien-678-677x381.jpg',
        featured: true,
        status: 'PUBLISHED',
        view: Math.round(Math.random() * 10000),
        likeCount: Math.round(Math.random() * 1000),
        dislikeCount: Math.round(Math.random() * 100),
        createdBy: 1,
        literary: 2,
      },
      {
        postId: 3,
        title: 'Phân tích bài thơ Sóng của Xuân Quỳnh',
        slug: 'phan-tich-bai-tho-song-cua-xuan-quynh',
        summary:
          'Tình yêu là đề tài muôn thuở của thi ca. Nhiều nhà thơ nổi tiếng đã viết về tình yêu với tất cả sự nồng nhiệt của một trái tim tuổi trẻ. Ta bắt gặp một Xuân Diệu nồng nàn, đắm say và khát khao dâng hiến cho tình yêu, một Nguyễn Bính mơ màng tìm về tình yêu đồng nội, một Anh Thơ tha thiết nhưng thẹn thùng cái duyên con gái… ',
        htmlContent: `<p>Xu&acirc;n Quỳnh l&agrave; nh&agrave; thơ của hạnh ph&uacute;c đời thường. Thơ b&agrave; l&agrave; tiếng l&ograve;ng của một t&acirc;m hồn lu&ocirc;n lu&ocirc;n khao kh&aacute;t t&igrave;nh y&ecirc;u, gắn b&oacute; hết m&igrave;nh với cuộc sống h&agrave;ng ng&agrave;y, tr&acirc;n trọng, n&acirc;ng niu v&agrave; chăm ch&uacute;t cho hạnh ph&uacute;c đời thường. Trong c&aacute;c nh&agrave; thơ nữ Việt Nam, Xu&acirc;n Quỳnh xứng đ&aacute;ng được gọi l&agrave; nh&agrave; thơ của t&igrave;nh y&ecirc;u. B&agrave; viết nhiều, viết hay về t&igrave;nh y&ecirc;u nhưng c&oacute; lẽ S&oacute;ng l&agrave; b&agrave;i thơ đặc sắc hơn cả. Bởi n&oacute; n&oacute;i l&ecirc;n được một t&acirc;m hồn khao kh&aacute;t y&ecirc;u đương, một t&igrave;nh y&ecirc;u vừa hồn nhi&ecirc;n ch&acirc;n thật, vừa m&atilde;nh liệt, s&ocirc;i nổi của một tr&aacute;i tim phụ nữ.</p>
<p>T&igrave;nh y&ecirc;u l&agrave; đề t&agrave;i mu&ocirc;n thuở của thi ca. Nhiều nh&agrave; thơ nổi tiếng đ&atilde; viết về t&igrave;nh y&ecirc;u với tất cả sự nồng nhiệt của một tr&aacute;i tim tuổi trẻ. Ta bắt gặp một Xu&acirc;n Diệu nồng n&agrave;n, đắm say v&agrave; kh&aacute;t khao d&acirc;ng hiến cho t&igrave;nh y&ecirc;u, một Nguyễn B&iacute;nh mơ m&agrave;ng t&igrave;m về t&igrave;nh y&ecirc;u đồng nội, một Anh Thơ tha thiết nhưng thẹn th&ugrave;ng c&aacute;i duy&ecirc;n con g&aacute;i&hellip; nhưng chỉ đến Xu&acirc;n Quỳnh, c&aacute;i kh&aacute;t vọng rất đỗi đời thường của con người đ&oacute; mới được bộc bạch , m&agrave; bộc bạch một c&aacute;ch ch&acirc;n th&agrave;nh như ch&iacute;nh cuộc đời nh&agrave; thơ vậy : một thứ t&igrave;nh y&ecirc;u vừa phong ph&uacute;, phức tạp, vừa thiết tha s&ocirc;i nổi của một tr&aacute;i tim phụ nữ đang rạo rực, đang khao kh&aacute;t y&ecirc;u đương.</p>
<p>S&oacute;ng trong t&aacute;c phẩm c&ugrave;ng t&ecirc;n của nh&agrave; thơ mang h&igrave;nh ảnh ẩn dụ. N&oacute; l&agrave; sự h&oacute;a th&acirc;n của c&aacute;i t&ocirc;i trữ t&igrave;nh đầy mơ mộng của thi nh&acirc;n. S&oacute;ng v&agrave; em tuy hai m&agrave; một, c&oacute; l&uacute;c ph&acirc;n đ&ocirc;i để soi chiếu v&agrave;o nhau l&agrave;m nổi bật sự tương đồng, c&oacute; l&uacute;c lại h&ograve;a nhập để tạo n&ecirc;n &acirc;m vang cộng hưởng. V&agrave; c&oacute; thể n&oacute;i qua h&igrave;nh tượng s&oacute;ng, Xu&acirc;n Quỳnh đ&atilde; b&agrave;y tỏ một t&igrave;nh y&ecirc;u dạt d&agrave;o, m&ecirc;nh m&ocirc;ng v&agrave; một kh&aacute;t vọng vĩnh hằng về t&igrave;nh y&ecirc;u đ&ocirc;i lứa.</p>
<p><img src="https://danviet.mediacdn.vn/296231569849192448/2022/9/27/dem-nhac-ky-niem-sinh-nhat-nha-tho-xuan-quynhjpg-16642888300381752903081-132-0-1382-2000-crop-16642898899821934738409.jpg" alt="Niềm vui v&agrave; sự y&ecirc;u đời của Xu&acirc;n Quỳnh lu&ocirc;n tỏa ra từ trong &aacute;nh mắt&rdquo;"></p>
<p>Mở đầu b&agrave;i thơ l&agrave; trạng th&aacute;i t&acirc;m l&yacute; đặc biệt của một t&acirc;m hồn đang khao kh&aacute;t y&ecirc;u đương, đang t&igrave;m đến một t&igrave;nh y&ecirc;u rộng lớn hơn. Xu&acirc;n Quỳnh diễn tả thật cụ thể c&aacute;i trạng th&aacute;i kh&aacute;c thường, vừa phong ph&uacute; vừa phức tạp trong một tr&aacute;i tim cồn c&agrave;o khao kh&aacute;t t&igrave;nh y&ecirc;u. T&iacute;nh kh&iacute; của người con g&aacute;i đang y&ecirc;u, cũng như s&oacute;ng vậy th&ocirc;i, vốn mang trong n&oacute; nhiều trạng th&aacute;i đối cực: &ldquo;Dữ dội v&agrave; dịu &ecirc;m, Ồn &agrave;o v&agrave; lặng lẽ&rdquo;&hellip; V&agrave; cũng như s&oacute;ng, tr&aacute;i tim người con g&aacute;i đang y&ecirc;u kh&ocirc;ng chấp nhận sự tầm thường, nhỏ hẹp, lu&ocirc;n vươn tới c&aacute;i lớn lao để c&oacute; thể đồng cảm, đồng điệu với m&igrave;nh &ldquo;S&ocirc;ng kh&ocirc;ng hiểu nổi m&igrave;nh, S&oacute;ng t&igrave;m ra tận bể&rdquo;. C&oacute; thể thấy, ngay trong khổ thơ đầu ti&ecirc;n n&agrave;y một n&eacute;t mới mẻ trong quan niệm về t&igrave;nh y&ecirc;u. Người con g&aacute;i khao kh&aacute;t y&ecirc;u đương nhưng kh&ocirc;ng c&ograve;n nhẫn nhục, cam chịu nữa. Nếu &ldquo;S&ocirc;ng kh&ocirc;ng hiểu nổi m&igrave;nh&rdquo; th&igrave; s&oacute;ng s&oacute;ng dứt kho&aacute;t từ bỏ nơi chật hẹp đ&oacute; &ldquo;T&igrave;m ra tận bể&rdquo;, đến với c&aacute;i cao rộng, bao dung. Thật l&agrave; minh bạch v&agrave; cũng thật l&agrave; quyết liệt !</p>
<p>Nỗi kh&aacute;t vọng t&igrave;nh y&ecirc;u x&ocirc;n xao, rạo rực trong tr&aacute;i tim con người, trong quan niệm của Xu&acirc;n Quỳnh, l&agrave; kh&aacute;t vọng mu&ocirc;n đời của nh&acirc;n loại m&agrave; m&atilde;nh liệt nhất l&agrave; của tuổi trẻ. N&oacute; cũng như s&oacute;ng, m&atilde;i m&atilde;i trường tồn , vĩnh hằng với thời gian. Từ ng&agrave;n xưa, con người đ&atilde; đến với t&igrave;nh y&ecirc;u v&agrave; m&atilde;i m&atilde;i cứ đến với t&igrave;nh y&ecirc;u. Với con người, t&igrave;nh y&ecirc;u bao giờ cũng l&agrave; một kh&aacute;t vọng bồi hồi:</p>
<p style="text-align: center;"><em>&Ocirc;i con s&oacute;ng ng&agrave;y xưa</em></p>
<p style="text-align: center;"><em>V&agrave; ng&agrave;y nay vẫn thế</em></p>
<p style="text-align: center;"><em>Nỗi kh&aacute;t vọng t&igrave;nh y&ecirc;u</em></p>
<p style="text-align: center;"><em>Bồi hồi trong ngực trẻ</em></p>
<p>Khi t&igrave;nh y&ecirc;u đến, như một t&acirc;m l&yacute; tự nhi&ecirc;n v&agrave; thường t&igrave;nh, người ta lu&ocirc;n c&oacute; nhu cầu tự t&igrave;m hiểu v&agrave; ph&acirc;n t&iacute;ch. Nhưng t&igrave;nh y&ecirc;u l&agrave; một hiện tượng t&acirc;m l&yacute; kh&aacute;c thường, đầy b&iacute; ẩn, kh&ocirc;ng thể giải quyết được bằng l&yacute; lẽ th&ocirc;ng thường, l&agrave;m sao c&oacute; thể giải đ&aacute;p được c&acirc;u hỏi về khởi nguồn của t&igrave;nh y&ecirc;u, về thời điểm bắt đầu của một t&igrave;nh y&ecirc;u. C&aacute;i điều m&agrave; trước đ&oacute; đ&atilde; từng l&agrave; Xu&acirc;n Di&ecirc;u băn khoăn &ldquo;L&agrave;m sao cặt được nghĩa t&igrave;nh y&ecirc;u? &rdquo; th&igrave; nay một lần nữa Xu&acirc;n Quỳnh bộc bạch một c&aacute;ch hồn nhi&ecirc;n, thật dễ thương. T&igrave;nh y&ecirc;u cũng như s&oacute;ng biển, như gi&oacute; trời vậy th&ocirc;i, l&agrave;m sao c&oacute; thể hiểu hết được. N&oacute; cũng tự nhi&ecirc;n, hồn nhi&ecirc;n như thi&ecirc;n nhi&ecirc;n , v&agrave; cũng kh&oacute; hiểu, nhiều bất ngờ như tự nhi&ecirc;n vậy :</p>
<p style="text-align: center;"><em>S&oacute;ng bắt đầu từ gi</em></p>
<p style="text-align: center;"><em>Gi&oacute; bắt đầu từ đ&acirc;u</em></p>
<p style="text-align: center;"><em>Em cũng kh&ocirc;ng biết nữa</em></p>
<p style="text-align: center;"><em>Khi n&agrave;o ta y&ecirc;u nhau</em></p>
<p>T&igrave;nh y&ecirc;u thường cũng gắn liền với nỗi nhớ khi xa c&aacute;ch. Nỗi nhớ của một tr&aacute;i tim đang y&ecirc;u được Xu&acirc;n Quỳnh diễn tả thật m&atilde;nh liệt. Một nỗi nhớ thường trực cả khi thức, cả khi ngủ, bao tr&ugrave;m l&ecirc;n cả kh&ocirc;ng gian. Một nỗi nhớ cồn c&agrave;o, da diết, kh&ocirc;ng thể n&agrave;o y&ecirc;n, kh&ocirc;ng thể n&agrave;o ngu&ocirc;i. N&oacute; cuồn cuộn, d&agrave;o dạt như những đợt s&oacute;ng biển triền mi&ecirc;n, v&ocirc; hồi, v&ocirc; hạn. Nhịp thơ trong suốt b&agrave;i thơ n&agrave;y l&agrave; nhịp s&oacute;ng, nhưng r&otilde; nhất, d&agrave;o dạt, hăm hở, n&aacute;o nức nhất , m&atilde;nh liệt nhất l&agrave; ở đoạn thơ n&agrave;y :</p>
<p style="text-align: center;"><em>Con s&oacute;ng dưới l&ograve;ng s&acirc;u</em></p>
<p style="text-align: center;"><em>Con s&oacute;ng tr&ecirc;n mặt nước</em></p>
<p style="text-align: center;"><em>&Ocirc;i con s&oacute;ng nhớ bờ</em></p>
<p style="text-align: center;"><em>Ng&agrave;y đ&ecirc;m kh&ocirc;ng ngủ được</em></p>
<p>V&agrave;, như tr&ecirc;n đ&atilde; n&oacute;i, vẫn l&agrave; h&igrave;nh tượng song h&agrave;nh của s&oacute;ng v&agrave; em bổ sung đắp đổi cho nhau nhằm diễn tả s&acirc;u sắc hơn, &aacute;m ảnh hơn t&igrave;nh y&ecirc;u v&agrave; nỗi nhớ c&ugrave;ng với l&ograve;ng thủy chung v&ocirc; hạn của một tr&aacute;i tim đang rạo rực y&ecirc;u thương. Nỗi nhớ được diễn tả qua h&igrave;nh tượng con s&oacute;ng nhớ bờ &ldquo; Ng&agrave;y đ&ecirc;m kh&ocirc;ng ngủ được&rdquo; vẫn chưa đủ, chưa thỏa, lại được thể hiện một lần nữa qua nỗi nhớ của nh&agrave; thơ : &ldquo; L&ograve;ng em nhớ đến anh, Cả trong mơ c&ograve;n thức&rdquo;. Nỗi nhớ tr&agrave;n đầy l&ograve;ng y&ecirc;u của thi sĩ. Nỗi nhớ thường trực trong mọi kh&ocirc;ng gian v&agrave; thời gian, kh&ocirc;ng chỉ tồn tại trong &yacute; thức m&agrave; c&ograve;n len lỏi trong &yacute; thức, x&acirc;m nhập v&agrave;o cả trong giấc mơ. Những đ&ograve;i hỏi, khao kh&aacute;t y&ecirc;u đương của người con g&aacute;i được bộc lộ thật m&atilde;nh liệt nhưng cũng thật giản dị: s&oacute;ng chỉ khao kh&aacute;t tới bờ cũng như em khao kh&aacute;t c&oacute; anh ! T&igrave;nh y&ecirc;u của người con g&aacute;i ở đ&acirc;y vừa thiết tha, m&atilde;nh liệt, vừa trong s&aacute;ng, giản dị, vừa thủy chung duy nhất. Qua h&igrave;nh tượng s&oacute;ng v&agrave; em. Xu&acirc;n Quỳnh đ&atilde; n&oacute;i l&ecirc;n thật ch&acirc;n th&agrave;nh, t&aacute;o bạo , kh&ocirc;ng hề giấu giếm c&aacute;i kh&aacute;t vọng t&igrave;nh y&ecirc;u s&ocirc;i nổi, m&atilde;nh liệt của m&igrave;nh, một phụ nữ, một điều hiếm thấy trong văn học Việt Nam.</p>
<p>Xu&acirc;n Quỳnh viết b&agrave;i thơ S&oacute;ng năm 1967, khi m&agrave; nh&agrave; thơ đ&atilde; từng nếm trải sự đổ vỡ trong t&igrave;nh y&ecirc;u. Song, người phụ nữ hồn nhi&ecirc;n tha thiết y&ecirc;u đời n&agrave;y vẫn c&ograve;n ấp ủ biết bao hi vọng, vẫn phơi phới một niềm tin v&agrave;o hạnh ph&uacute;c trong trương lai. Vừa tự động vi&ecirc;n, an ủi m&igrave;nh, t&aacute;c giả vừa tin v&agrave;o c&aacute;i đ&iacute;ch cuối c&ugrave;ng của một t&igrave;nh y&ecirc;u lớn như con s&oacute;ng nhất định sẽ &ldquo;tới bờ&rdquo;, &ldquo;d&ugrave; mu&ocirc;n vời c&aacute;ch trở&rdquo;. Tương lai hạnh ph&uacute;c như đang c&ograve;n ở ph&iacute;a trước. V&agrave; v&igrave; thế, &yacute; thức về thời gian chưa l&agrave;m nh&agrave; thơ lo &acirc;u m&agrave; chỉ l&agrave;m tăng th&ecirc;m niềm tin tưởng:</p>
<p style="text-align: center;"><em>Cuộc đời tuy d&agrave;i thế</em></p>
<p style="text-align: center;"><em>Năm th&aacute;ng vẫn đi qua</em></p>
<p style="text-align: center;"><em>Như biển kia dẫu rộng</em></p>
<p style="text-align: center;"><em>M&acirc;y vẫn bay về xa</em></p>
<p>Xu&acirc;n Quỳnh vừa thổ lộ trực tiếp, vừa mượn h&igrave;nh tượng s&oacute;ng để n&oacute;i v&agrave; suy nghĩ về t&igrave;nh y&ecirc;u. Những &yacute; nghĩ n&agrave;y c&oacute; vẻ tự do, tản mạn, nhưng từ trong chiều s&acirc;u của thi tứ vẫn c&ograve;n sự vận động nhất qu&aacute;n. Đ&oacute; l&agrave; cuộc h&agrave;nh tr&igrave;nh khởi đầu l&agrave; sự từ bỏ c&aacute;i chật chội, nhỏ hẹp để t&igrave;m đến một t&igrave;nh y&ecirc;u bao la, rộng lớn, cuối c&ugrave;ng l&agrave; kh&aacute;t vọng được sống hết m&igrave;nh trong t&igrave;nh y&ecirc;u, muốn h&oacute;a th&acirc;n vĩnh viễn th&agrave;nh t&igrave;nh y&ecirc;u mu&ocirc;n thuở:</p>
<p style="text-align: center;"><em>L&agrave;m sao được tan ra</em></p>
<p style="text-align: center;"><em>Th&agrave;nh trăm con s&oacute;ng nhỏ</em></p>
<p style="text-align: center;"><em>Giữa biển lớn t&igrave;nh y&ecirc;u</em></p>
<p style="text-align: center;"><em>Để ng&agrave;n năm c&ograve;n vỗ.</em></p>
<p>Người con g&aacute;i mong muốn h&ograve;a m&igrave;nh v&agrave;o bể đời rộng lớn , bứt m&igrave;nh ra khỏi những lo toan t&iacute;nh to&aacute;n , để ngập ch&igrave;m trong bể lớn t&igrave;nh y&ecirc;u. Phải c&oacute; một t&igrave;nh y&ecirc;u như thế n&agrave;o th&igrave; mới c&oacute; được một mong muốn cao cả đến chừng ấy. Kh&aacute;t vọng t&igrave;nh y&ecirc;u cũng l&agrave; kh&aacute;t vọng sống m&atilde;nh liệt đủ đầy. Cuộc đời c&ograve;n t&igrave;nh y&ecirc;u th&igrave; cuộc đời c&ograve;n tươi đẹp v&agrave; đ&aacute;ng sống v&agrave; sống trong t&igrave;nh y&ecirc;u l&agrave; một điều hạnh ph&uacute;c. Xu&acirc;n Quỳnh mong ước được sống m&atilde;i trong t&igrave;nh y&ecirc;u, bất tử với t&igrave;nh y&ecirc;u</p>
<p>S&oacute;ng l&agrave; một b&agrave;i thơ t&igrave;nh y&ecirc;u rất ti&ecirc;u biểu cho tư tưởng v&agrave; phong c&aacute;ch thơ Xu&acirc;n Quỳnh ở giai đoạn đầu. Một b&agrave;i thơ vừa xinh xắn, duy&ecirc;n d&aacute;ng, vừa m&atilde;nh liệt, s&ocirc;i nổi, vừa hồn nhi&ecirc;n, trong s&aacute;ng, vừa &yacute; nhị s&acirc;u xa. Sau n&agrave;y khi đ&atilde; nếm trải nhiều cay đắng trong t&igrave;nh y&ecirc;u, giọng thơ Xu&acirc;n Quỳnh kh&ocirc;ng c&ograve;n phơi phới bốc men say nữa, nhưng c&aacute;i kh&aacute;t vọng t&igrave;nh y&ecirc;u vẫn tồn tại m&atilde;i m&atilde;i trong tr&aacute;i tim tr&agrave;n ngập y&ecirc;u thương của nh&agrave; thơ.</p>`,
        featuredImage:
          'https://cdnimg.vietnamplus.vn/t1200/Uploaded/tpuoaob/2022_10_01/xuanquynhgoogle.png',
        featured: false,
        status: 'PUBLISHED',
        view: Math.round(Math.random() * 10000),
        likeCount: Math.round(Math.random() * 1000),
        dislikeCount: Math.round(Math.random() * 100),
        createdBy: 1,
        literary: 3,
      },
      {
        postId: 4,
        title: 'Phân tích đoạn trích "Tức nước vỡ bờ"',
        slug: 'phan-tich-doan-trich-tuc-nuoc-vo-bo',
        summary:
          'Tác giả lấy đề tài từ một vụ thu thuế hàng năm ở một làng quê Bắc Bộ, qua đó phản ánh số phận bi thảm của nông dân và bản chất tàn bạo của giai cấp thống trị trong xã hội đương thời. Có thể nói tác phẩm Tắt đèn là bức tranh thu nhỏ của nông thôn Việt Nam dưới thời Pháp thuộc.',
        htmlContent: `<p>Ng&ocirc; Tất Tố (1893 &ndash; 1954), qu&ecirc; ở l&agrave;ng Lộc H&agrave;, huyện Từ Sơn, tỉnh Bắc Ninh, nay thuộc Đ&ocirc;ng Anh, H&agrave; Nội; l&agrave; một nh&agrave; Nho sống ở n&ocirc;ng th&ocirc;n, c&oacute; vốn hiểu biết H&aacute;n học kh&aacute; s&acirc;u rộng, &ocirc;ng nổi tiếng tr&ecirc;n lĩnh vực b&aacute;o ch&iacute; v&agrave; văn chương trong giai đoạn đầu thế kỉ XX. Tắt đ&egrave;n l&agrave; t&aacute;c phẩm ti&ecirc;u biểu trong sự nghiệp s&aacute;ng t&aacute;c của Ng&ocirc; Tất Tố v&agrave; trong tr&agrave;o lưu văn học hiện thực trước C&aacute;ch mạng th&aacute;ng T&aacute;m 1945.</p>
<p>&nbsp;</p>
<p>T&aacute;c giả lấy đề t&agrave;i từ một vụ thu thuế h&agrave;ng năm ở một l&agrave;ng qu&ecirc; Bắc Bộ, qua đ&oacute; phản &aacute;nh số phận bi thảm của n&ocirc;ng d&acirc;n v&agrave; bản chất t&agrave;n bạo của giai cấp thống trị trong x&atilde; hội đương thời. C&oacute; thể n&oacute;i t&aacute;c phẩm Tắt đ&egrave;n l&agrave; bức tranh thu nhỏ của n&ocirc;ng th&ocirc;n Việt Nam dưới thời Ph&aacute;p thuộc. Trong t&aacute;c phẩm Tắt đ&egrave;n, bằng ng&ograve;i b&uacute;t tả thực sắc sảo, nh&agrave; văn đ&atilde; vẽ l&ecirc;n ch&acirc;n dung sinh động của một loạt nhận vật. Từ vợ chồng l&atilde;o Nghị Quế keo kiệt bất nh&acirc;n đến bọn cường h&agrave;o tham lam hống h&aacute;ch. Từ một quan "phụ mẫu" oai vệ m&agrave; bỉ ổi đến bọn tay sai đầu tr&acirc;u mặt ngựa. Mỗi đứa một vẻ nhưng đều giống nhau ở bản chất t&agrave;n &aacute;c v&agrave; tư c&aacute;ch đ&ecirc; tiện. Những nh&acirc;n vật phản diện n&agrave;y ti&ecirc;u biểu cho tầng lớp phong kiến thống trị ở n&ocirc;ng th&ocirc;n l&uacute;c bấy giờ.</p>
<p><img src="https://images.toplist.vn/images/800px/bai-van-phan-tich-doan-trich-tuc-nuoc-vo-bo-so-2-415703.jpg" alt="Ảnh minh họa (Nguồn internet)"></p>
<p>Đặc biệt, Ng&ocirc; Tất Tố đ&atilde; th&agrave;nh c&ocirc;ng xuất sắc trong việc x&acirc;y dựng h&igrave;nh tượng điển h&igrave;nh về người phụ nữ n&ocirc;ng d&acirc;n qua nh&acirc;n vật chị Dậu. Nh&agrave; văn mi&ecirc;u tả ch&acirc;n thực v&agrave; cảm động về số phận tủi cực của người n&ocirc;ng d&acirc;n bị &aacute;p bức, b&oacute;c lột, bị dồn đến bước đường c&ugrave;ng. Nh&agrave; văn ch&acirc;n th&agrave;nh ca ngợi phẩm chất đ&aacute;ng qu&yacute; của họ trong ho&agrave;n cảnh sống tối tăm, ngột ngạt. Th&aacute;i độ y&ecirc;u gh&eacute;t của Ng&ocirc; Tất Tố thể hiện rất r&otilde; r&agrave;ng qua từng trang viết. T&igrave;nh cảm y&ecirc;u mến, tr&acirc;n trọng m&agrave; &ocirc;ng d&agrave;nh cho người n&ocirc;ng d&acirc;n khiến &ocirc;ng thật sự l&agrave; tri &acirc;m, tri kỉ của họ. &ocirc;ng cũng kh&ocirc;ng giấu diếm sự khinh bỉ v&agrave; căm gh&eacute;t đối với bọn thống trị s&acirc;u mọt ở n&ocirc;ng th&ocirc;n. Về nghệ thuật, Tắt đ&egrave;n được coi l&agrave; tiểu thuyết hiện thực xuất sắc m&agrave; th&agrave;nh c&ocirc;ng lớn nhất l&agrave; t&aacute;c giả đ&atilde; dựng n&ecirc;n một thế giới nh&acirc;n vật sinh động, trong đ&oacute; c&oacute; những điển h&igrave;nh độc đ&aacute;o.</p>
<p>&nbsp;</p>
<p>Đoạn Tức nước vỡ bờ tr&iacute;ch từ chương XVIII của t&aacute;c phẩm, nội dung xoay quanh những biến động gh&ecirc; gớm xảy ra với gia đ&igrave;nh chị Dậu trong m&ugrave;a sưu thuế. Vụ thuế đang trong thời điểm gay gắt nhất. Quan tr&ecirc;n sắp về tận l&agrave;ng để đốc thuế. Bọn tay sai hung h&atilde;n x&ocirc;ng v&agrave;o nh&agrave; những người chưa nộp thuế để đ&aacute;nh tr&oacute;i, bắt bớ v&agrave; giải ra đ&igrave;nh tiếp tục c&ugrave;m kẹp, tra khảo. Chị Dậu đ&atilde; phải b&aacute;n khoai, b&aacute;n ch&oacute;, b&aacute;n cả đứa con g&aacute;i lớn để nộp sưu cho chồng, nhưng bọn h&agrave;o l&iacute; ngang ngược lại bắt anh Dậu phải nộp cả suất của người em đ&atilde; chết từ năm ngo&aacute;i. Th&agrave;nh thử, anh Dậu vẫn cứ l&agrave; người thiếu thuế, bọn ch&uacute;ng chắc chắn sẽ kh&ocirc;ng bu&ocirc;ng tha. Đ&atilde; thế anh Dậu lại đang ốm rề rề sau trận đ&ograve;n, tưởng chết đ&ecirc;m qua. Nếu bị ch&uacute;ng đ&aacute;nh tr&oacute;i lần nữa th&igrave; mạng sống của anh kh&oacute; m&agrave; giữ được. Vấn đề quan trọng nhất đối với chị Dậu giờ đ&acirc;y l&agrave; l&agrave;m sao bảo vệ được chồng trong t&igrave;nh thế nguy ngập n&agrave;y. Đoạn tr&iacute;ch tiếp nối c&acirc;u chuyện tr&ecirc;n.</p>
<p>&nbsp;</p>
<p>Qua đoạn tr&iacute;ch, t&aacute;c giả phơi b&agrave;y v&agrave; l&ecirc;n &aacute;n bản chất t&agrave;n &aacute;c bất nh&acirc;n của chế độ thực d&acirc;n phong kiến l&uacute;c bấy giờ v&agrave; phản &aacute;nh t&igrave;nh cảnh đau thương của n&ocirc;ng d&acirc;n c&ugrave;ng quy luật c&oacute; &aacute;p bức c&oacute; đấu tranh. Nh&agrave; văn gi&uacute;p ch&uacute;ng ta thấy được vẻ đẹp t&acirc;m hồn v&agrave; sức sống tiềm t&agrave;ng của người phụ nữ n&ocirc;ng d&acirc;n ngh&egrave;o khổ. Trong đoạn tr&iacute;ch c&oacute; hai nh&acirc;n vật ch&iacute;nh l&agrave; chị Dậu v&agrave; t&ecirc;n cai lệ. Mở đầu l&agrave; cảnh chị Dậu chăm s&oacute;c người chồng ốm yếu vừa bị bọn h&agrave;o l&iacute; trong l&agrave;ng đ&aacute;nh đập d&atilde; man chỉ v&igrave; thiếu tiền nộp sưu. Chị Dậu đ&atilde; cố gắng hết sức để cứu chồng nhưng cuối c&ugrave;ng anh Dậu vẫn kh&ocirc;ng tr&aacute;nh được sự bắt bớ, h&agrave;nh hạ. C&oacute; thấy được t&igrave;nh thương y&ecirc;u chổng con s&acirc;u sắc của chị Dậu, ta mới h&igrave;nh dung được sự dũng cảm qu&ecirc;n m&igrave;nh của chị. Chị tất tả chạy ngược chạy xu&ocirc;i, vay được nắm gạo nấu nồi ch&aacute;o lo&atilde;ng. Cảm động thay l&agrave; cảnh chị Dậu m&uacute;c ch&aacute;o ra mấy c&aacute;i b&aacute;t cũ kĩ, sứt mẻ v&agrave; quạt tia lịa cho ch&aacute;o mau nguội rồi &acirc;n cần mời mọc: Thầy em cố dậy h&uacute;p t&iacute; ch&aacute;o cho đỡ x&oacute;t ruột. Trong &aacute;nh mắt v&agrave; giọng n&oacute;i của người vợ ngh&egrave;o khổ ấy to&aacute;t l&ecirc;n một t&igrave;nh cảm tha thiết đến nao l&ograve;ng.</p>
<p>&nbsp;</p>
<p>Chị Dậu đ&atilde; trở th&agrave;nh trụ cột của c&aacute;i gia đ&igrave;nh đang quẫn b&aacute;ch khốn khổ v&igrave; sưu, v&igrave; thuế. Chồng bị đ&aacute;nh đập, g&ocirc;ng c&ugrave;m. Một tay chị ch&egrave;o chống, chạy vạy, phải b&aacute;n tất cả những g&igrave; c&oacute; thể b&aacute;n được, kể cả đứa con g&aacute;i đầu l&ograve;ng ngoan ngo&atilde;n, hiếu thảo m&agrave; chị thương đứt ruột để lấy tiền nộp sưu, cứu chồng khỏi v&ograve;ng t&ugrave; tội. Chị đ&atilde; phải đổ bao mồ h&ocirc;i nước mắt để anh Dậu được trả tự do trong t&igrave;nh trạng tưởng như chỉ c&ograve;n l&agrave; một c&aacute;i x&aacute;c kh&ocirc;ng hồn. Giữa l&uacute;c anh Dậu vừa bưng b&aacute;t ch&aacute;o kề v&agrave;o miệng th&igrave; cai lệ v&agrave; người nh&agrave; l&iacute; trưởng đ&atilde; sầm sập sấn v&agrave;o với những roi song, tay thước v&agrave; d&acirc;y thừng, h&ograve; h&eacute;t bắt anh phải nộp tiền sưu. Qu&aacute; khiếp đảm, anh Dậu đ&atilde; lăn đ&ugrave;ng ra kh&ocirc;ng n&oacute;i được c&acirc;u g&igrave;, chỉ c&ograve;n chị Dậu một m&igrave;nh đối ph&oacute; với lũ &aacute;c nh&acirc;n. Chị Dậu đ&atilde; đương đầu với bọn nha dịch tay sai để bảo vệ chồng như thế n&agrave;o?</p>
<p>&nbsp;</p>
<p>Ban đầu, khi bọn ch&uacute;ng ập v&agrave;o định l&ocirc;i anh Dậu đi nhưng chưa h&agrave;nh hung m&agrave; chỉ chửi bới, mỉa mai, đe doạ th&igrave; chị Dậu vẫn nhũn nhặn van xin t&ecirc;n cai lệ độc &aacute;c. Bọn đầu tr&acirc;u mặt ngựa hung h&atilde;n nh&acirc;n danh ph&eacute;p nước, người nh&agrave; nước để ra tay, c&ograve;n chồng chị l&agrave; hạng c&ugrave;ng đinh đang c&oacute; tội (!) cho n&ecirc;n chị phải van xin. Vả lại, kinh nghiệm l&acirc;u đời đ&atilde; th&agrave;nh bản năng của người n&ocirc;ng d&acirc;n thấp cổ b&eacute; họng l&agrave; phải biết r&otilde; th&acirc;n phận m&igrave;nh. Th&oacute;i quen nhẫn nhục khiến chị chỉ d&aacute;m năn nỉ, khơi gợi l&ograve;ng nh&acirc;n từ của t&ecirc;n cai lệ: Ch&aacute;u van &ocirc;ng, nh&agrave; ch&aacute;u vừa mới tĩnh được một l&uacute;c, &ocirc;ng tha cho! C&aacute;ch xưng h&ocirc; &ocirc;ng, ch&aacute;u của chị Dậu l&agrave; c&aacute;ch xưng h&ocirc; của kẻ dưới với người tr&ecirc;n, biểu hiện sự hạ m&igrave;nh. Bọn ch&uacute;ng chẳng th&egrave;m nghe m&agrave; sầm sập chạy đến chỗ anh Dậu, định bắt tr&oacute;i anh một lần nữa th&igrave; chị Dậu đ&atilde; giận x&aacute;m mặt nhưng vẫn cố chịu đựng, n&iacute;u tay t&ecirc;n cai lệ van n&agrave;i: Ch&aacute;u xin &ocirc;ng! Mọi lời n&oacute;i, h&agrave;nh động của chị Dậu đều kh&ocirc;ng ngo&agrave;i mục đ&iacute;ch để bảo vệ chồng.</p>
<p>&nbsp;</p>
<p>Đến khi giới hạn của sự chịu đựng bị ph&aacute; vỡ th&igrave; t&iacute;nh c&aacute;ch cứng cỏi của chị Dậu mới thật sự bộc lộ. L&uacute;c t&ecirc;n cai lệ đ&aacute;p lại lời van xin của chị bằng những c&uacute; đấm th&ocirc; bạo rồi sấn đến tr&oacute;i anh Dậu th&igrave; chị tức qu&aacute; kh&ocirc;ng thể chịu được n&ecirc;n đ&atilde; liều mạng chống cự lại. Sự b&ugrave;ng nổ t&iacute;nh c&aacute;ch n&agrave;y l&agrave; kết quả tất yếu của qu&aacute; tr&igrave;nh chịu đựng l&acirc;u d&agrave;i sự t&agrave;n &aacute;c, bất c&ocirc;ng. Điều đ&oacute; đ&uacute;ng với quy luật c&oacute; &aacute;p bức, c&oacute; đấu tranh. Người đọc x&oacute;t thương một chị Dậu phải hạ m&igrave;nh van xin bao nhi&ecirc;u th&igrave; c&agrave;ng đồng t&igrave;nh, nể phục một chị Dậu đ&aacute;o để, quyết liệt bấy nhi&ecirc;u. L&uacute;c đầu, chị cự lại t&ecirc;n cai lệ bằng l&iacute; lẽ: Chồng t&ocirc;i đau ốm, &ocirc;ng kh&ocirc;ng được ph&eacute;p h&agrave;nh hạ! Thực ra, chị chỉ n&oacute;i đến l&ograve;ng nh&acirc;n đạo tối thiểu của con người. Chị kh&ocirc;ng c&ograve;n xưng ch&aacute;u v&agrave; gọi t&ecirc;n cai lệ bằng &ocirc;ng nữa m&agrave; xưng l&agrave; t&ocirc;i &ndash; &ocirc;ng, ngẩng cao đầu nh&igrave;n thẳng v&agrave;o mặt đối thủ.</p>
<p>&nbsp;</p>
<p>Từ vị thế thấp h&egrave;n của kẻ dưới, chị Dậu vụt trở th&agrave;nh ngang h&agrave;ng với những kẻ xưa nay vẫn đ&egrave; đầu cưỡi cổ m&igrave;nh. C&acirc;u n&oacute;i của chị l&agrave; lời cảnh c&aacute;o cứng rắn m&agrave; vẫn c&oacute; đủ t&igrave;nh, đủ l&iacute;. Nhưng c&aacute;i &aacute;c thường kh&ocirc;ng biết ch&ugrave;n tay. T&ecirc;n cai lệ cứ sấn tới đ&aacute;nh chị v&agrave; nhảy v&agrave;o định l&ocirc;i anh Dậu đi. L&ograve;ng y&ecirc;u thương chồnng tha thiết đ&atilde; th&uacute;c đẩy chị phải h&agrave;nh động chống trả quyết liệt lũ tay sai t&agrave;n &aacute;c đang cố t&igrave;nh ph&aacute; n&aacute;t gia đ&igrave;nh chị. Chị kh&ocirc;ng chấp nhận để chồng m&igrave;nh bị h&agrave;nh hạ th&ecirc;m một lần nữa. H&agrave;nh động chống trả bọn tay sai diễn ra thật bất ngờ nhưng thực ra mầm mống phản kh&aacute;ng đ&atilde; ẩn chứa từ l&acirc;u dưới vẻ ngo&agrave;i cam chịu nhẫn nhục thường ng&agrave;y của chị. Sự chịu đựng k&eacute;o d&agrave;i v&agrave; sự &aacute;p bức l&ecirc;n đến tột đỉnh khiến cho th&aacute;i độ phản kh&aacute;ng b&ugrave;ng l&ecirc;n dữ dội.</p>
<p>&nbsp;</p>
<p>Khi t&ecirc;n cai lệ d&atilde; th&uacute; ấy t&aacute;t v&agrave;o mặt chị một c&aacute;i đ&aacute;nh bốp rồi cứ hung hăng sấn tới chỗ anh Dậu, th&igrave; chị đ&atilde; nghiến hai h&agrave;m răng th&aacute;ch thức: M&agrave;y tr&oacute;i ngay chồng b&agrave; đi, b&agrave; cho m&agrave;y xem! Kh&ocirc;ng c&ograve;n &ocirc;ng &ndash; ch&aacute;u, t&ocirc;i &ndash; &ocirc;ng g&igrave; nữa, chị chuyển phắt sang xưng b&agrave; v&agrave; gọi t&ecirc;n cai lệ l&agrave; m&agrave;y. Điều đ&oacute; thể hiện th&aacute;i độ căm giận, khinh bỉ đến cao độ, đồng thời khẳng định tư thế của chị l&agrave; sẵn s&agrave;ng đ&egrave; bẹp đối phương. Chị Dậu l&agrave; một l&ograve; lửa đang b&ugrave;ng ch&aacute;y dữ dội. Chị kh&ocirc;ng th&egrave;m đấu l&iacute; với t&ecirc;n cai lệ bất lương m&agrave; thẳng tay trừng trị hắn. Tiếp sau lời cảnh c&aacute;o đanh th&eacute;p l&agrave; h&agrave;nh động phản kh&aacute;ng mạnh mẽ. Rồi chị t&uacute;m lấy cổ hắn, ấn d&uacute;i ra cửa. Sức lẻo khẻo của anh ch&agrave;ng nghiện chạy kh&ocirc;ng kịp với sức x&ocirc; đẩy của người đ&agrave;n b&agrave; lực điền, hắn ng&atilde; chỏng qu&egrave;o tr&ecirc;n mặt đất... C&ograve;n t&ecirc;n người nh&agrave; l&iacute; trưởng hung hăng kết cục cũng bị chị Dậu t&uacute;m t&oacute;c; lẳng cho một c&aacute;i, ng&atilde; nh&agrave;o ra thềm.</p>
<p>&nbsp;</p>
<p>Đoạn văn mi&ecirc;u tả cuộc đối đầu giữa chị Dậu v&agrave; lũ người độc &aacute;c được t&aacute;c giả mi&ecirc;u tả thật sinh động v&agrave; thu vị. Trong x&atilde; hội m&agrave; tội &aacute;c ho&agrave;nh h&agrave;nh, c&ograve;n g&igrave; hả h&ecirc; hơn khi mọi người được chứng kiến c&aacute;i &aacute;c bị trừng trị đ&iacute;ch đ&aacute;ng?! Do đ&acirc;u m&agrave; chị Dậu c&oacute; sức mạnh lạ l&ugrave;ng một l&uacute;c quật ng&atilde; hai t&ecirc;n tay sai hung h&atilde;n như vậy? Đ&oacute; l&agrave; sức mạnh của l&ograve;ng căm hờn m&agrave; c&aacute;i gốc của l&ograve;ng căm hờn ấy lại ch&iacute;nh l&agrave; t&igrave;nh y&ecirc;u thương v&agrave; &yacute; thức bảo vệ chồng con của người đ&agrave;n b&agrave; ngh&egrave;o khổ. Khi r&oacute;n r&eacute;n bưng ch&aacute;o cho chồng v&agrave; theo d&otilde;i xem chồng ăn c&oacute; ngon miệng kh&ocirc;ng, khi hạ m&igrave;nh van xin kẻ &aacute;c v&agrave; khi nghiến răng quật ng&atilde; ch&uacute;ng, trước sau, l&uacute;c n&agrave;o chị Dậu cũng v&igrave; người chồng đang đau ốm. T&igrave;nh y&ecirc;u chồng, thương con cộng với tinh thần phản kh&aacute;ng &acirc;m ỉ bấy l&acirc;u đ&atilde; thổi b&ugrave;ng ngọn lửa phản kh&aacute;ng trong l&ograve;ng chị. Nỗi sợ cố hữu của kẻ bị &aacute;p bức ph&uacute;t chốc ti&ecirc;u tan, chỉ c&ograve;n lại nh&acirc;n c&aacute;ch cứng cỏi của một con người ch&acirc;n ch&iacute;nh. H&agrave;nh động chống đối bộc ph&aacute;t đ&oacute; ch&iacute;nh l&agrave; biểu hiện cụ thể của t&igrave;nh y&ecirc;u thương m&atilde;nh liệt trong tr&aacute;i t&iacute;m người phụ nữ dường như sinh ra để suốt đời nhường nhịn, hi sinh.</p>
<p>&nbsp;</p>
<p>Tuy vậy, sự phản kh&aacute;ng của chị Dậu mới chỉ l&agrave; h&agrave;nh động tức nước vỡ bờ của một c&aacute; nh&acirc;n chứ chưa phải l&agrave; h&agrave;nh động v&ugrave;ng l&ecirc;n ph&aacute; vỡ &aacute;p bức bất c&ocirc;ng để tự giải ph&oacute;ng của một giai cấp, một d&acirc;n tộc. Thế nhưng n&oacute; cũng chứng minh cho quy luật c&oacute; &aacute;p bức, c&oacute; đấu tranh. &Aacute;p bức c&agrave;ng nhiều th&igrave; đấu tranh c&agrave;ng quyết liệt. Chứng kiến cảnh x&ocirc; x&aacute;t giữa vợ m&igrave;nh với t&ecirc;n cai lệ v&agrave; người nh&agrave; l&iacute; trưởng, anh Dậu sợ qu&aacute; muốn dậy can vợ, nhưng mệt lắm, ngồi l&ecirc;n lại nằm xuống, vừa run lại vừa k&ecirc;u: &ndash; U n&oacute; kh&ocirc;ng được thế! Người ta đ&aacute;nh m&igrave;nh kh&ocirc;ng sao, m&igrave;nh đ&aacute;nh người ta l&agrave; phải t&ugrave;, phải tội. Anh Dậu cố nhắc cho vợ nhớ c&aacute;i sự thật phổ biến trong x&atilde; hội l&uacute;c bấy giờ, nhưng chị Dậu kh&ocirc;ng chấp nhận điều v&ocirc; l&iacute; đ&oacute;. Chị phẫn uất h&eacute;t l&ecirc;n: Th&agrave; ngồi t&ugrave;, để ch&uacute;ng n&oacute; l&agrave;m t&igrave;nh l&agrave;m tội m&atilde;i thế t&ocirc;i chịu kh&ocirc;ng được... C&acirc;u n&oacute;i n&agrave;y khẳng định chị Dậu kh&ocirc;ng muốn c&uacute;i đầu cam chịu m&atilde;i cảnh &aacute;p bức, bất c&ocirc;ng.</p>
<p>&nbsp;</p>
<p>&Yacute; nghĩa của c&acirc;u tục ngữ tức nước vỡ bờ qua ng&ograve;i b&uacute;t hiện thực của Ng&ocirc; Tất Tố đ&atilde; được thể hiện thật sống động v&agrave; đầy thuyết phục. Tuy t&aacute;c giả khi đ&oacute; chưa gi&aacute;c ngộ c&aacute;ch mạng v&agrave; t&aacute;c phẩm kết th&uacute;c bằng cảnh ngộ bế tắc của chị Dậu nhưng nh&agrave; văn Nguyễn Tu&acirc;n đ&atilde; nhận x&eacute;t rằng Ng&ocirc; Tất Tố, với Tắt đ&egrave;n đ&atilde; "xui người n&ocirc;ng d&acirc;n đấu tranh c&aacute;ch mạng...". Bằng cảm quan hiện thực mạnh mẽ, Ng&ocirc; Tất Tố đ&atilde; cảm nhận được xu thế "tức nước vỡ bờ" v&agrave; sức mạnh to lớn kh&ocirc;n lường của n&oacute;. C&oacute; thể n&oacute;i đoạn tr&iacute;ch n&agrave;y đ&atilde; dự b&aacute;o cơn b&atilde;o t&aacute;p của quần ch&uacute;ng n&ocirc;ng d&acirc;n nổi dậy dưới sự tập hợp, l&atilde;nh đạo của Đảng v&agrave; B&aacute;c Hồ sẽ hất phăng chế độ thực d&acirc;n phong kiến tham t&agrave;n, mục n&aacute;t.</p>
<p>&nbsp;</p>
<p>Nh&acirc;n vật cai lệ trong đoạn tr&iacute;ch ti&ecirc;u biểu cho lũ tay sai chuy&ecirc;n nghiệp, l&agrave; c&ocirc;ng cụ đ&agrave;n &aacute;p đắc lực của giai cấp thống trị. Để khẳng định vai tr&ograve; của m&igrave;nh trong vụ thuế, hắn đ&aacute;nh người, tr&oacute;i người v&ocirc; tội vạ. Trong bộ m&aacute;y thống trị ở n&ocirc;ng th&ocirc;n, t&ecirc;n cai lệ n&agrave;y chỉ l&agrave; một g&atilde; tay sai mạt hạng. Hắn hung dữ, sẵn s&agrave;ng g&acirc;y tội &aacute;c m&agrave; kh&ocirc;ng ch&ugrave;n tay v&igrave; kh&ocirc;ng hề bị ai ngăn chặn. Hắn v&ecirc;nh v&aacute;o tự cho m&igrave;nh l&agrave; đại diện cho nh&agrave; nước. Hắn nh&acirc;n danh ph&eacute;p nước để l&agrave;m những điều t&agrave;n &aacute;c đối với người ngh&egrave;o. V&igrave; vậy, c&oacute; thể n&oacute;i, t&ecirc;n cai lệ v&ocirc; danh đ&oacute; l&agrave; hiện th&acirc;n đầy đủ nhất của c&aacute;i guồng m&aacute;y "nh&agrave; nước" bất nh&acirc;n l&uacute;c bấy giờ. Tuy chỉ xuất hiện trong một đoạn văn ngắn nhưng nh&acirc;n vật cai lệ được ng&ograve;i b&uacute;t tả thực của t&aacute;c giả khắc họa nổi bật, c&oacute; gi&aacute; trị kh&aacute;i qu&aacute;t cao.</p>
<p>&nbsp;</p>
<p>Đoạn tr&iacute;ch Tức nước vỡ bờ l&agrave; một đoạn văn hay, ti&ecirc;u biểu cho b&uacute;t ph&aacute;p tả thực t&agrave;i t&igrave;nh của Ng&ocirc; Tất Tố. Ng&ocirc;n ngữ kể chuyện, mi&ecirc;u tả v&agrave; đối thoại của nh&acirc;n vật rất đặc sắc. Đ&oacute; l&agrave; lời ăn tiếng n&oacute;i b&igrave;nh dị, tự nhi&ecirc;n của đời sống hằng ng&agrave;y. Mỗi nh&acirc;n vật đều c&oacute; ng&ocirc;n ngữ ri&ecirc;ng. Ng&ocirc;n từ của t&ecirc;n cai lệ th&igrave; th&ocirc; lỗ, đểu c&aacute;ng. Lời lẽ của chị Dậu khi th&igrave; thiết tha mềm mỏng, khi đanh th&eacute;p quyết liệt. Lời lẽ của b&agrave; cụ h&agrave;ng x&oacute;m th&igrave; thật th&agrave;, hiền hậu... Lời ăn tiếng n&oacute;i của n&ocirc;ng d&acirc;n được t&aacute;c giả sử dụng nhuần nhuyễn, rất hợp cảnh, hợp t&igrave;nh. Nh&agrave; văn Ng&ocirc; Tất Tố đ&atilde; d&agrave;nh cho nh&acirc;n vật ch&iacute;nh l&agrave; chị Dậu t&igrave;nh cảm y&ecirc;u thương, th&ocirc;ng cảm v&agrave; tr&acirc;n trọng. Những t&igrave;nh tiết sinh động v&agrave; đầy kịch t&iacute;nh trong đoạn tr&iacute;ch đ&atilde; g&oacute;p phần ho&agrave;n thiện t&iacute;nh c&aacute;ch của người phụ nữ n&ocirc;ng d&acirc;n đẹp người, đẹp nết.</p>
<p>&nbsp;</p>
<p>Chị Dậu mộc mạc, hiền dịu, vị tha, sống khi&ecirc;m nhường, biết nhẫn nhục chịu đựng... nhưng ho&agrave;n to&agrave;n kh&ocirc;ng yếu đuối, tr&aacute;i lại vẫn c&oacute; một sức sống mạnh mẽ, một tinh thần phản kh&aacute;ng tiềm t&agrave;ng. Khi bị đẩy tới bước đường c&ugrave;ng, chị đ&atilde; v&ugrave;ng dậy chống trả quyết liệt. Đ&oacute; l&agrave; th&aacute;i độ cứng c&ograve;i, bất khuất, d&aacute;m đối đầu với c&aacute;i &aacute;c trong x&atilde; hội.</p>`,
        featuredImage:
          'https://pgdphurieng.edu.vn/wp-content/uploads/2023/05/chi-dau-1.jpg',
        featured: false,
        view: Math.round(Math.random() * 10000),
        likeCount: Math.round(Math.random() * 1000),
        dislikeCount: Math.round(Math.random() * 100),
        status: 'PUBLISHED',
        createdBy: 1,
        literary: 4,
      },
      {
        postId: 5,
        title: 'Phân tích nhân vật Phùng trong Chiếc thuyền ngoài xa',
        slug: 'phan-tich-nhan-vat-phung-trong-chiec-thuyen-ngoai-xa',
        summary:
          'Nguyễn Minh Châu thuộc thế hệ nhà văn trưởng thành trong cuộc kháng chiến chống Mỹ. Cùng với nhà văn Nguyễn Khải, Nguyễn Minh Châu có những đống góp quan trọng đối với nền văn học kháng chiến chống Mỹ và nền văn học thời kì đầu đổi mới. “Nguyễn Minh Châu là người kế tục xuất sắc những bậc thầy của nền văn xuôi Việt Nam và cũng là người mở đường rực rỡ cho những cây bút trẻ tài năng sau này” (Nguyễn khải).',
        htmlContent: `<p>Nguyễn Minh Ch&acirc;u thuộc thế hệ nh&agrave; văn trưởng th&agrave;nh trong cuộc kh&aacute;ng chiến chống Mỹ. C&ugrave;ng với nh&agrave; văn Nguyễn Khải, Nguyễn Minh Ch&acirc;u c&oacute; những đống g&oacute;p quan trọng đối với nền văn học kh&aacute;ng chiến chống Mỹ v&agrave; nền văn học thời k&igrave; đầu đổi mới. &ldquo;Nguyễn Minh Ch&acirc;u l&agrave; người kế tục xuất sắc những bậc thầy của nền văn xu&ocirc;i Việt Nam v&agrave; cũng l&agrave; người mở đường rực rỡ cho những c&acirc;y b&uacute;t trẻ t&agrave;i năng sau n&agrave;y&rdquo; (Nguyễn khải).</p>
 <p>Chiếc thuyền ngo&agrave;i xa l&agrave; một t&aacute;c phẩm xuất sắc của Nguyễn Minh Ch&acirc;u. Đ&acirc;y l&agrave; một t&aacute;c phẩm ti&ecirc;u biểu cho đề t&agrave;i đời tư, thế sự của Nguyễn Minh Ch&acirc;u sau 1975. T&aacute;c phẩm thuộc kiểu truyện luận đề v&agrave; nh&acirc;n vật Ph&ugrave;ng l&agrave; người ph&aacute;t biểu c&aacute;c luận đề ấy. Qua nh&acirc;n vật Ph&ugrave;ng v&agrave; c&aacute;c nh&acirc;n vật kh&aacute;c nh&agrave; văn đề cập đến t&iacute;nh trung thực của người nghệ sĩ, n&ecirc;u l&ecirc;n mối quan hệ chặt chẽ giữa văn học v&agrave; hiện thực cũng như những vấn để phức tạp của cuộc sống, kể cả bi kịch số phận con người.</p>
 <p>Vốn l&agrave; một người l&iacute;nh chiến đ&atilde; từng v&agrave;o sinh ra tử, Ph&ugrave;ng căm gh&eacute;t mọi sự &aacute;p bức bất c&ocirc;ng. Anh sẵn s&agrave;ng l&agrave;m tất cả v&igrave; điều thiện v&agrave; lẽ c&ocirc;ng bằng. Anh thực sự x&uacute;c động ngỡ ng&agrave;ng trước trước vẻ đẹp m&aacute;t mẻ tinh kh&ocirc;i của con thuyền v&agrave; biển cả l&uacute;c b&igrave;nh minh. Đ&oacute; l&agrave; sự rung đ&ocirc;ng của người nghệ sĩ trước c&aacute;i đẹp tr&ecirc;n cuộc đời n&agrave;y v&agrave; n&oacute; th&uacute;c đầy anh khao kh&aacute;t đi t&igrave;m. Ph&ugrave;ng l&agrave; con người nghệ sĩ c&oacute; t&agrave;i năng. Ở anh lại c&oacute; một t&acirc;m hồn mơ mộng v&agrave; lu&ocirc;n kh&aacute;t khao hướng tới một c&aacute;i đẹp to&agrave;n b&iacute;ch, to&agrave;n thiện. Sự từng trải qua cuộc đời người l&iacute;nh c&agrave;ng khiến anh biết qu&yacute; trọng cuộc sống v&agrave; n&acirc;ng niu từng vẻ đẹp m&agrave; anh c&oacute; được. Anh tin rằng c&ograve;n c&oacute; những vẻ đẹp kh&aacute;c đang bị ẩn giấu, che khuất. Với tr&aacute;ch nhiệm của người nghệ sĩ ch&acirc;n ch&iacute;nh, anh phải đi t&igrave;m, ph&aacute;t hiện v&agrave; l&agrave;m cho n&oacute; tỏa s&aacute;ng.</p>
 <div class="adbox in-article"><img src="https://o.rada.vn/data/image/2021/05/26/dan-y-phan-tich-Phung.jpg" alt="D&agrave;n &yacute; ph&acirc;n t&iacute;ch nh&acirc;n vật ph&ugrave;ng (4 Mẫu) - Văn 12"></div>
 <p>Bắt gặp cuộc sống của một gia đ&igrave;nh l&agrave;ng ch&agrave;i tưởng chừng như b&igrave;nh y&ecirc;n m&agrave; lại v&ocirc; c&ugrave;ng khốc liệt khiến anh v&ocirc; c&ugrave;ng sửng sốt. Một con người nhạy cảm như Ph&ugrave;ng l&agrave;m sao tr&aacute;nh khỏi nỗi tức giận khi ph&aacute;t hiện đằng sau cảnh đẹp của chiếc thuyền ngo&agrave;i xa l&agrave; sự bạo h&agrave;nh của c&aacute;i xấu, c&aacute;i &aacute;c. Mới đầu, chứng kiến cảnh l&atilde;o đ&agrave;n &ocirc;ng đ&aacute;nh vợ v&agrave; người đ&agrave;n b&agrave; nhẫn nhục chịu đựng, Ph&ugrave;ng hết sức &ldquo;kinh ngạc&rdquo;. Anh &ldquo;h&aacute; mồm ra m&agrave; nh&igrave;n&rdquo;. Rồi như một phản xạ tự nhi&ecirc;n, anh &ldquo;vứt chiếc m&aacute;y ảnh xuống đất, chạy nh&agrave;o tới&rdquo;.</p>
 <p>H&agrave;nh động ấy đ&atilde; n&oacute;i l&ecirc;n được rất nhiều điều đ&aacute;ng để suy ngẫm. Thứ nhất, chiếc thuyền nghệ thuật th&igrave; ở ngo&agrave;i xa. N&oacute; đang ở một khoảng c&aacute;ch đủ để tạo n&ecirc;n một vẻ đẹp huyền ảo. Nhưng sự thật cuộc đời th&igrave; lại ở rất gần. Thứ hai, đừng v&igrave; nghệ thuật m&agrave; qu&ecirc;n cuộc đời. Bởi lẽ, nghệ thuật ch&acirc;n ch&iacute;nh lu&ocirc;n l&agrave; cuộc đời v&agrave; v&igrave; cuộc đời. &ldquo;Trước khi l&agrave; một nghệ sĩ biết rung động trước c&aacute;i đẹp h&atilde;y l&agrave; một con biết y&ecirc;u gh&eacute;t vui buồn tức trước mọi lẽ đời thường t&igrave;nh, biết h&agrave;nh động để c&oacute; một cuộc sống xứng đ&aacute;ng với con người&rdquo;(Trăng s&aacute;ng &ndash; Nam Cao).</p>
 <p>Nguyễn Minh Ch&acirc;u đ&atilde; kh&ocirc;ng c&oacute; tạo n&ecirc;n những mảnh đời đối lập. Song, cứ tự nhi&ecirc;n, cuộc đời lại vẽ l&ecirc;n những bức tranh m&agrave;u đầy ảm đạm. Cuộc sống của gia đ&igrave;nh tr&ecirc;n con thuyền chật hẹp cứ từng lớp, từng lớp được phơi b&agrave;y trước mắt Ph&ugrave;ng. Anh đi từ trạng th&aacute;i n&agrave;y đến trạng th&aacute;i kh&aacute;c, vừa h&acirc;n hoan, vừa hết sức đau thương, vừa m&atilde;n nguyện vừa xung đột m&atilde;nh liệt. Nam Cao cũng đ&atilde; từng khắc họa h&igrave;nh ảnh người nghệ sĩ trong điểm nh&igrave;n nghệ thuật đầy xung đột. Điền l&agrave; một nh&agrave; văn, nh&agrave; gi&aacute;o ngh&egrave;o. Mặc d&ugrave; cuộc sống vất vả, kh&oacute; khăn nhưng t&acirc;m hồn Điền lại đẫm thơ văn l&atilde;ng mạn. Những đ&ecirc;m trăng s&aacute;ng, Điền ngắm trăng v&agrave; mơ mộng một cuộc sống kh&aacute;c, đối lập với cuộc sống hiện tại của Điền. &ldquo;Nghệ thuật kh&ocirc;ng phải l&agrave; &aacute;nh trăng lừa dối, kh&ocirc;ng n&ecirc;n l&agrave; &aacute;nh trăng lừa dối. Nghệ thuật chỉ c&oacute; thể l&agrave; tiếng đau khổ kia, tho&aacute;t ra từ những kiếp sống lầm than&rdquo; (Trăng s&aacute;ng &ndash; Nam Cao).</p>
 <p>Đằng sau mỗi vẻ đẹp trắng lệ lu&ocirc;n ẩn giấu một nỗi đau n&agrave;o đ&oacute; của trần thế. Điều quan trọng l&agrave; người nghệ sĩ c&oacute; nh&igrave;n thấy hoặc d&aacute;m nh&igrave;n thẳng v&agrave;o n&oacute; để phản ảnh hay kh&ocirc;ng. Đ&oacute; l&agrave; thử th&aacute;ch lớn đối với cả Điềm v&agrave; Ph&ugrave;ng khi họ bất ngờ bị đặt v&agrave;o t&igrave;nh thế g&acirc;y cấn để phản ngộ. Điều m&agrave; nghệ sĩ nhiếp ảnh Ph&ugrave;ng &ldquo;ngộ&rdquo; ra khi chứng kiến cảnh người đ&agrave;n &ocirc;ng đ&aacute;nh vợ một c&aacute;ch t&agrave;n bạo ch&iacute;nh l&agrave; t&igrave;nh người ẩn s&acirc;u trong tr&aacute;i tim đầy đau khổ của người đ&agrave;n b&agrave; kia. Nếu quan s&aacute;t từ &ldquo;ngo&agrave;i xa&rdquo; th&igrave; khung cảnh con thuyền v&agrave; mặt biển mờ sương thật đẹp, thật mơ mộng. Thậm ch&iacute; n&oacute; đạt đến sự &ldquo;to&agrave;n b&iacute;ch&rsquo;&rsquo;, hiếm khi được may mắn bắt gặp. Nhưng khi tới gần, nghệ sĩ nhiếp ảnh Ph&ugrave;ng mới nhận ra đằng sau khung cảnh đẹp ấy chứa bao nghịch cảnh đau l&ograve;ng. Người chồng đ&aacute;nh vợ một c&aacute;ch t&agrave;n nhẫn. Đứa con trai th&igrave; cầm dao xong v&agrave;o bố. Cuộc sống ấy đối v&oacute;i người đ&agrave;n b&agrave; chẳng kh&aacute;c g&igrave; địa ngục thế nhưng kh&ocirc;ng thể rời bỏ được, &hellip;.</p>
 <p>Như vậy, giữa nghệ thuật v&agrave; cuộc đời c&oacute; một khoảng c&aacute;ch qu&aacute; xa khiến người nghệ sĩ c&oacute; sự ngộ nhận. Phải chăng qua t&igrave;nh huống n&agrave;y, nh&agrave; văn Nguyễn Minh Ch&acirc;u muốn gửi tới người đọc một th&ocirc;ng điệp s&acirc;u sắc. Để phản ảnh đ&uacute;ng về bản chất của cuộc sống, con người. Người nghệ sĩ đ&iacute;ch thực kh&ocirc;ng thể đứng ngo&agrave;i xa để quan s&aacute;t m&agrave; phải sống gắn b&oacute; với hiện thực đời sống, phải nh&igrave;n nhận sự vật một c&aacute;ch đầy đủ, to&agrave;n diện. Mặt kh&aacute;c, muốn c&oacute; được một bức ảnh nghệ thuật đẹp theo đ&uacute;ng nghĩa của n&oacute; th&igrave; trước hết phải l&agrave;m cho cuộc sống đẹp đẽ, mới mẽ với những con người c&oacute; t&acirc;m hồn trong s&aacute;ng, tinh kh&ocirc;i.</p>`,
        featuredImage:
          'https://hoigiasudanang.com/wp-content/uploads/2021/11/mo-bai-chiec-thuyen-ngoai-xa.jpg',
        featured: false,
        view: Math.round(Math.random() * 10000),
        likeCount: Math.round(Math.random() * 1000),
        dislikeCount: Math.round(Math.random() * 100),
        status: 'PUBLISHED',
        createdBy: 1,
        literary: 5,
      },
    ],
  });

  tmpArr.map(async (e, k) => {
    await prisma.comment.createMany({
      data: comments.map((cmt, i) => ({
        commentId: k * 10 + ++i,
        content: cmt,
        createdBy: (Math.round(Math.random() * 100) % 3) + 1,
        postId: k + 1,
        createdAt: new Date(
          new Date().getTime() - Math.round(Math.random() * 100000000),
        ),
      })),
    });
  });

  await prisma.postTag.createMany({
    data: [1, 1, 1, 1, 1].map((e, i) => ({
      postId: i + 1,
      tagId: i + 1,
    })),
  });
  await prisma.literaryCategory.createMany({
    data: [
      {
        literaryId: 1,
        categoryId: 1,
      },
      {
        literaryId: 2,
        categoryId: 3,
      },
      {
        literaryId: 3,
        categoryId: 3,
      },
      {
        literaryId: 4,
        categoryId: 4,
      },
      {
        literaryId: 5,
        categoryId: 2,
      },
    ],
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
    data: [
      {
        settingId: 1,
        fontFamily: 'Mali',
        primaryColor: 'brown',
        webTitle: 'Học Văn Không Vất Vả',
        logo: 'https://i.ibb.co/wdqbVkv/Vietlit-Img.png',
        favIcon: 'https://i.ibb.co/ZzZgHxT/favicon.png',
        homeHeroTitle: 'Bạn Đang Cần Tham Khảo Bài Viết Văn Học?',
        homeHeroSubtitle:
          'Học Văn Không Vất Vả là nơi chia sẻ, thảo luận những bài nghị luận, phân tích văn học chất lượng hoàn toàn miễn phí.',
        homeHeroCover: 'https://i.ibb.co/VNQT78b/Vietlit-Img-1.png',
        readPostCover: 'https://i.ibb.co/6vhgRhM/hero.png',
      },
      {
        settingId: 2,
        fontFamily: 'Mali',
        primaryColor: 'brown',
        webTitle: 'Học Văn Không Vất Vả',
        logo: 'https://i.ibb.co/wdqbVkv/Vietlit-Img.png',
        favIcon: 'https://i.ibb.co/ZzZgHxT/favicon.png',
        homeHeroTitle: 'Bạn Đang Cần Tham Khảo Bài Viết Văn Học?',
        homeHeroSubtitle:
          'Học Văn Không Vất Vả là nơi chia sẻ, thảo luận những bài nghị luận, phân tích văn học chất lượng hoàn toàn miễn phí.',
        homeHeroCover: 'https://i.ibb.co/VNQT78b/Vietlit-Img-1.png',
        readPostCover: 'https://i.ibb.co/6vhgRhM/hero.png',
      },
    ],
  });
  [1, 1, 1, 1, 1].forEach(async (e, i) => {
    const publishedPostCount = await prisma.post.count({
      where: {
        AND: [
          {
            literary: i + 1,
          },
          {
            status: 'PUBLISHED',
          },
        ],
      },
    });
    await prisma.literary.update({
      where: {
        literaryId: i + 1,
      },
      data: {
        postCount: publishedPostCount,
      },
    });
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
