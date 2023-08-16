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
  const tmpArr = Array.from({ length: 2 });

  await prisma.user.createMany({
    data: [
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
        name: 'Tuấn Hùng',
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
      {
        tagId: 6,
        tagName: 'vochongaphu',
        slug: 'vochongaphu',
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
      {
        postId: 6,
        title:
          'Cảm nhận về nhân vật người đàn bà hàng chài trong tác phẩm Chiếc Thuyền Ngoài Xa',
        slug: 'cam-nhan-ve-nhan-vat-nguoi-dan-ba-hang-chai-trong-tac-pham-chiec-thuyen-ngoai-xa',
        summary:
          'Trong cuộc sống phức tạp này, sự thật đôi khi không phải là điều ngay trước mắt mà sự thật là cái ẩn giấu bên trong. Vì vậy muốn nhìn nhận đúng về cuộc sống về con người, chúng ta phải nhìn vào cái bên trong, bản chất thật, nhìn cuộc sống một cách đa diện. Giống như nhân vật người đàn bà hàng chài của Nguyễn Minh Châu trong truyện ngắn chiếc thuyền ngoài xa.',
        htmlContent: `<p>Trong cuộc sống phức tạp n&agrave;y, sự thật đ&ocirc;i khi kh&ocirc;ng phải l&agrave; điều ngay trước mắt m&agrave; sự thật l&agrave; c&aacute;i ẩn giấu b&ecirc;n trong. V&igrave; vậy muốn nh&igrave;n nhận đ&uacute;ng về cuộc sống về con người, ch&uacute;ng ta phải nh&igrave;n v&agrave;o c&aacute;i b&ecirc;n trong, bản chất thật, nh&igrave;n cuộc sống một c&aacute;ch đa diện. Giống như nh&acirc;n vật người đ&agrave;n b&agrave; h&agrave;ng ch&agrave;i của Nguyễn Minh Ch&acirc;u trong truyện ngắn chiếc thuyền ngo&agrave;i xa.</p>
 <p>Người đ&agrave;n b&agrave; h&agrave;ng ch&agrave;i xuất hiện trong t&aacute;c phẩm kh&ocirc;ng c&oacute; t&ecirc;n tuổi, chỉ được gọi bằng những đại từ &ldquo;người đ&agrave;n b&agrave; h&agrave;ng ch&agrave;i&rdquo;, &ldquo;mụ&rdquo;. Ngoại h&igrave;nh được khắc họa với những n&eacute;t quen thuộc của người v&ugrave;ng biển cao lớn với những đường n&eacute;t th&ocirc; kệch, mặt rỗ. Người đ&agrave;n b&agrave; c&oacute; ngoại h&igrave;nh thật xấu x&iacute; v&agrave; phi thẩm mĩ. Trước kia, người đ&agrave;n b&agrave; n&agrave;y sống ở phố. Con một gia đ&igrave;nh kh&aacute;, nhưng kh&ocirc;ng ai lấy v&igrave; xấu. Chị đ&atilde;Bộ Th&ocirc;ng tin v&agrave; Truyền th&ocirc;ng cho biết việc sửa đổi Luật Viễn th&ocirc;ng, trong đ&oacute; c&oacute; OTT viễn th&ocirc;ng, nhằm đảm bảo an to&agrave;n, an ninh mạng v&agrave; quyền lợi người d&ugrave;ng. c&oacute; mang với anh l&agrave;ng ch&agrave;i v&agrave; đ&atilde; c&oacute; cuộc sống h&ocirc;n nh&acirc;n với anh. Người kh&aacute;c nh&igrave;n v&agrave;o cho rằng đ&acirc;y l&agrave; địa ngục v&igrave; ba ng&agrave;y chị bị một trận nhỏ, năm ng&agrave;y chị bị một trận lớn. Đ&uacute;ng vậy cuộc sống của chị thật đ&aacute;ng thương v&agrave; khổ cực. Chị khổ cả về thể x&aacute;c v&agrave; tinh thần, giống bao gia đ&igrave;nh l&agrave;ng ch&agrave;i kh&aacute;c, gia đ&igrave;nh chị đ&ocirc;ng con. Nh&agrave; th&igrave; ngh&egrave;o kh&oacute;. Thuyền th&igrave; b&eacute;, c&oacute; những lần gia đ&igrave;nh chị phải ăn xương rồng luộc chấm muối. Một cuộc sống kh&ocirc;ng thể n&agrave;o khổ hơn. Người ta nhiều khi khổ về vật chất, nhưng tinh thần đầy đủ cũng l&agrave; hạnh ph&uacute;c " một t&uacute;p lều tranh hai trai tim v&agrave;ng". Nhưng chị đ&acirc;u được thế cuộc sống tinh thần của chị c&ograve;n khổ hơn. Người đ&agrave;n &ocirc;ng xấu x&iacute;- chồng chị, một phần v&igrave; cuộc sống l&agrave;m cho t&iacute;nh c&aacute;ch hắn hung bạo. Hắn d&ugrave;ng c&aacute;ch giải tho&aacute;t sự bức x&uacute;c bằng c&aacute;ch đ&aacute;nh đập chị, chửa rửa chị v&agrave; c&aacute;c con chị: &ldquo;M&agrave;y chết đi cho &ocirc;ng nhờ, ch&uacute;ng m&agrave;y chết đi cho &ocirc;ng nhờ&rsquo;. Bị những trận đ&ograve;n roi những c&aacute;i quất mạnh của c&ocirc;ng t&agrave;n bạo, nhưng chị vẫn &ldquo;với vẻ mặt cam chịu đầy nhẫn nhục, kh&ocirc;ng hề k&ecirc;u một tiếng, kh&ocirc;ng t&igrave;m c&aacute;ch chống trả, kh&ocirc;ng t&igrave;m c&aacute;ch chạy trốn. Trận đ&ograve;n roi chỉ dừng lại khi thằng ph&aacute;c lao tới cứu mẹ v&agrave; đ&aacute;nh lại bố&rdquo;. Người đ&agrave;n b&agrave; kể trước kia khi con c&ograve;n nhỏ, hắn đ&aacute;nh chị tr&ecirc;n thuyền. Sau khi con lớn, chị xin hắn đưa l&ecirc;n bờ rồi đ&aacute;nh. Ch&uacute;ng ta thấy rằng cuộc sống của chị thật kh&oacute; khăn, chị chỉ biết cam chịu v&agrave; đ&ocirc;i khi ch&iacute;nh l&agrave; sự ngu dốt.</p>
 <p><img src="https://o.rada.vn/data/image/2021/03/27/Nguoi-dan-ba.jpg" alt="D&agrave;n &yacute; ph&acirc;n t&iacute;ch người đ&agrave;n b&agrave; l&agrave;ng ch&agrave;i (9 Mẫu) - Văn 12"></p>
 <p>Nhưng thực chất b&ecirc;n trong c&ograve;n nhiều điều m&agrave; mọi người chưa r&otilde;. Khi ch&aacute;nh &aacute;n đầu gợi &yacute; ly h&ocirc;n, chị nhất định kh&ocirc;ng chịu, van n&agrave;i xin kh&ocirc;ng ly h&ocirc;n, nhận hết tr&aacute;ch nhiệm, tội lỗi l&ecirc;n đầu m&igrave;nh. V&igrave; sao ư? V&igrave; chị l&agrave; một người am hiểu lẽ đời, cho d&ugrave; thất học. Chị hiểu rằng t&ecirc;n con thuyền n&agrave;y cần một người đ&agrave;n &ocirc;ng ch&egrave;o chống vượt qua. Phong ba v&agrave; nu&ocirc;i cho sấp con của chị cũng rất cảm th&ocirc;ng cho chồng chị, xưa l&agrave; một con người cực t&igrave;nh nhưng kh&ocirc;ng bao giờ đ&aacute;nh vợ. Nhưng cũng v&igrave; cuộc sống kh&oacute; khăn, l&agrave;m cho người đ&agrave;n &ocirc;ng đ&acirc;m ra đ&aacute;nh vợ con , chị nhẫn nhục cam chịu, nhận hết tr&aacute;ch nhiệm về bản th&acirc;n m&igrave;nh. Nhận v&igrave; m&igrave;nh đẻ nhiều con m&agrave; cuộc sống khổ cực. Ngo&agrave;i cam chịu, chấp nhận hy sinh, cuộc sống của chị c&ograve;n c&oacute; niềm vui đ&oacute; l&agrave; khi c&aacute;c con chị được ăn no, mặc ấm.Người mẹ n&agrave;o cũng vậy, thấy c&aacute;c con m&igrave;nh hạnh ph&uacute;c, th&igrave; bản th&acirc;n hạnh ph&uacute;c gấp một trăm lần rồi. V&agrave; đ&ocirc;i khi gia đ&igrave;nh chị cũng h&ograve;a thuận, đầm ấm, vui vẻ chị c&ograve;n c&oacute; l&ograve;ng tự trọng cao. Chị biết xấu hổ khi c&oacute; người kh&aacute;c biết truyện m&igrave;nh bị đ&aacute;nh, đặc biệt l&agrave; thằng ph&aacute;c. Người chị y&ecirc;u thương nhất " C&aacute;i thằng con từ t&iacute;nh kh&iacute; đến mặt mũi giống như lột từ c&aacute;i l&atilde;o đ&agrave;n &ocirc;ng đ&atilde; h&agrave;nh hạ mụ" Chị đ&atilde; kh&oacute;c khi ph&ugrave;ng nhắc tới thằng ph&aacute;t. Chị thương con v&ocirc; c&ugrave;ng, Chị cũng đem đến cho đẩu v&agrave; ph&ugrave;ng những b&agrave;i học qu&yacute; gi&aacute;.</p>
 <p>Nguyễn Minh Ch&acirc;u đ&atilde; th&agrave;nh c&ocirc;ng trong việc sử dụng nghệ thuật đối lập. Một b&ecirc;n l&agrave; người đ&agrave;n b&agrave; xấu x&iacute;, phi thẩm mĩ, một b&ecirc;n l&agrave; vẻ đ&aacute;ng thương, phẩm chất b&ecirc;n trong của con người đ&aacute;ng tr&acirc;n trọng. Người đ&agrave;n b&agrave; trong truyện l&agrave; người c&oacute; cốt c&aacute;ch b&ecirc;n trong, biết nh&igrave;n xa, thương đ&agrave;n con nhỏ, gi&agrave;u đức hi sinh, l&ograve;ng vị tha, thương chồng, thương con am hiểu lẽ đời, sẵn s&agrave;ng hi sinh bản th&acirc;n về hạnh ph&uacute;c, no ấm cho chồng, cho con. Đ&acirc;y ch&iacute;nh l&agrave; những phẩm chất cao qu&yacute; của người phụ nữ Việt Nam.</p>
 <p>Qua h&igrave;nh ảnh người đ&agrave;n b&agrave; trong truyện ch&uacute;ng ta thấy người phụ nữ Việt Nam vẫn giữ được những n&eacute;t đẹp truyền thống của người phụ nữ &Aacute; Đ&ocirc;ng. D&ugrave; vẻ ngo&agrave;i kh&ocirc;ng đẹp nhưng b&ecirc;n trong lu&ocirc;n c&oacute; phẩm chất cao qu&yacute;. Lu&ocirc;n nghĩ tới gia đ&igrave;nh, hạnh ph&uacute;c nhỏ của m&igrave;nh, sẵn s&agrave;ng hi sinh mọi thứ để giữ g&igrave;n, chăm s&oacute;c gia đ&igrave;nh, hạnh ph&uacute;c đ&oacute; ch&iacute;nh l&agrave; con c&aacute;i của mẹ. Người phụ nữ mang một l&ograve;ng vị tha cao cả, Những kh&aacute;c biệt của người phụ nữ l&agrave;ng ch&agrave;i, phụ nữ ng&agrave;y nay năng động hơn, l&agrave;m chủ cuộc sống hơn, l&agrave;m chủ được kinh tế.</p>
 <p>Họ kh&ocirc;ng c&ograve;n phải nhẫn nhục chịu trận đ&ograve;n roi của chồng. Họ y&ecirc;u thương chồng con, họ cần một người đ&agrave;n &ocirc;ng ch&egrave;o k&eacute;o m&aacute;i ấm gia đ&igrave;nh, l&agrave; người y&ecirc;u thương gia đ&igrave;nh, y&ecirc;u thương vợ con. Nhưng nếu l&agrave; người đ&agrave;n &ocirc;ng vũ phu đ&aacute;nh đập vợ con, họ sẵn s&agrave;ng b&aacute;o cơ quan chức năng để bảo vệ quyền lợi hạnh ph&uacute;c của gia đ&igrave;nh m&igrave;nh. B&ecirc;n cạnh đ&oacute; vẫn c&ograve;n những người phụ nữ nhu m&igrave;, h&egrave;n nhắc, nhẫn nhục sẵn s&agrave;ng chịu đựng đ&ograve;n roi của chồng. Cố bấu v&iacute;u lấy c&aacute;i hạnh ph&uacute;c chỉ c&oacute; trong ảo tưởng, sống kh&ocirc;ng c&oacute; lập trường. Họ cần phải thay đổi c&aacute;ch sống, c&aacute;ch suy nghĩ tới giải ph&aacute;p cuối c&ugrave;ng để giải tho&aacute;t t&igrave;m hạnh ph&uacute;c , cho m&igrave;nh cơ hội để đến với hạnh ph&uacute;c đ&iacute;ch thực.</p>
 <p>Qua t&aacute;c phẩm Chiếc thuyền ngo&agrave;i xa đ&atilde; cho ta thấy sự đối lập, vẻ đẹp t&acirc;m hồn của người phụ nữ. Ch&uacute;ng ta cần phải nh&igrave;n cuộc sống v&agrave; t&acirc;m hồn đa diện, phải t&igrave;m kiếm, kh&aacute;m ph&aacute; c&aacute;i bản chất b&ecirc;n trong, từ vẻ bề ngo&agrave;i của người đ&agrave;n b&agrave; trong truyện y&ecirc;u thương chồng con hy sinh cao cả</p>`,
        featuredImage:
          'https://i.ibb.co/PQ1CYt6/phan-tich-nguoi-dan-ba-hang-chai.jpg',
        featured: false,
        view: Math.round(Math.random() * 10000),
        likeCount: Math.round(Math.random() * 1000),
        dislikeCount: Math.round(Math.random() * 100),
        status: 'PUBLISHED',
        createdBy: 1,
        literary: 5,
      },
      {
        postId: 7,
        title:
          'Phân tích truyện ngắn Chiếc thuyền ngoài xa của Nguyễn Minh Châu.',
        slug: 'phan-tich-truyen-ngan-chiec-thuyen-ngoai-xa-cua-nguyen-minh-chau',
        summary:
          'Nguyễn Minh Châu là nhà văn tài năng, trong sự nghiệp văn học của mình ông đã có nhiều cống hiến to lớn cho nền nghệ thuật nước nhà. Phong cách văn chương của ông mang tính tự sự - triết lý đậm nét. Mỗi thời kỳ sáng tác ông luôn để lại nhiều dấn ấn riêng trong lòng bạn đọc. Đặc biệt trong đó phải kể đến tác phẩm Chiếc thuyền ngoài xa. Tác phẩm thể hiện sự thay đổi quan niệm của nhà văn về mối quan hệ giữa cuộc đời và nghệ thuật, giữa hiện thực và con người.',
        htmlContent: `<p>Nguyễn Minh Ch&acirc;u l&agrave; nh&agrave; văn t&agrave;i năng, trong sự nghiệp văn học của m&igrave;nh &ocirc;ng đ&atilde; c&oacute; nhiều cống hiến to lớn cho nền nghệ thuật nước nh&agrave;. Phong c&aacute;ch văn chương của &ocirc;ng mang t&iacute;nh tự sự - triết l&yacute; đậm n&eacute;t. Mỗi thời kỳ s&aacute;ng t&aacute;c &ocirc;ng lu&ocirc;n để lại nhiều dấn ấn ri&ecirc;ng trong l&ograve;ng bạn đọc. Đặc biệt trong đ&oacute; phải kể đến t&aacute;c phẩm Chiếc thuyền ngo&agrave;i xa. T&aacute;c phẩm thể hiện sự thay đổi quan niệm của nh&agrave; văn về mối quan hệ giữa cuộc đời v&agrave; nghệ thuật, giữa hiện thực v&agrave; con người.</p>
 <p><img src="https://o.vdoc.vn/data/image/2023/03/07/phan-tich-chiec-thuyen-ngoai-xa.jpg" alt="Ph&acirc;n t&iacute;ch truyện ngắn &quot;Chiếc thuyền ngo&agrave;i xa&quot;"></p>
 <p>Truyện ngắn &ldquo;Chiếc thuyền ngo&agrave;i xa&rdquo; kể lại chuyến đi thực tế của một người nghệ sĩ nhiếp ảnh t&ecirc;n Ph&ugrave;ng c&ugrave;ng với những chi&ecirc;m nghiệm s&acirc;u sắc của anh về nghệ thuật v&agrave; cuộc đời. Theo lời đề nghị của trưởng ph&ograve;ng, nghệ sĩ nhiếp ảnh Ph&ugrave;ng đ&atilde; đi thực tế chụp bổ sung một bức ảnh với cảnh biển buổi s&aacute;ng c&oacute; sương m&ugrave; cho bộ lịch về thuyền v&agrave; biển. V&agrave; nơi Ph&ugrave;ng chọn để thực hiện b&ocirc; ảnh lại l&agrave; chiến trường cũ của anh thời kh&aacute;ng chiến chống đễ quốc Mĩ. Tại đ&acirc;y anh đ&atilde; được gặp lại Đẩu &ndash; người bạn chiến đấu năm xưa, giờ l&agrave; ch&aacute;nh &aacute;n t&ograve;a &aacute;n huyện. Khi đến anh bắt gặp một bức tranh tuyệt đẹp đ&oacute; l&agrave; h&igrave;nh ảnh của thuyền v&agrave; biển trong sương sớm. Nhưng trong bức tranh tuyệt diệu ấy Ph&ugrave;ng lại t&igrave;m ra hai ph&aacute;t hiện.</p>
 <p>Ph&aacute;t hiện thứ nhất của người nghệ sĩ nhiếp ảnh Ph&ugrave;ng đầy thơ mộng trước vẻ đẹp của chiếc thuyền ngo&agrave;i xa tr&ecirc;n biển sớm sương mờ. L&agrave; một ph&oacute;ng vi&ecirc;n y&ecirc;u nghề, c&oacute; đam m&ecirc; v&agrave; tinh thần tr&aacute;ch nhiệm cao trong c&ocirc;ng việc, Ph&ugrave;ng đ&atilde; trải qua khoảnh khắc hạnh ph&uacute;c tột c&ugrave;ng khi được thấy một cảnh &ldquo;đắt&rdquo; trời cho: &ldquo;trước mặt t&ocirc;i l&agrave; một bức tranh mực t&agrave;u của một danh họa thời cổ. Mũi thuyền in một n&eacute;t mơ hồ l&ograve;e nh&ograve;e v&agrave;o bầu sương m&ugrave; trắng như sữa c&oacute; pha đ&ocirc;i ch&uacute;t m&agrave;u hồng hồng do &aacute;nh mặt trời chiếu v&agrave;o&hellip;&rdquo;. Khung cảnh ấy quả thực đ&atilde; chạm tới x&uacute;c cảm của người nghệ sĩ. N&oacute; đem đến cho ta một vẻ đẹp đơn giản v&agrave; to&agrave;n b&iacute;ch khiến cho Ph&ugrave;ng phải bối rối, anh cảm nhận được trong tr&aacute;i tim như c&oacute; c&aacute;i g&igrave; đ&oacute; thắt v&agrave;o. Đ&oacute; l&agrave; khoảnh khắc trong ngần của t&acirc;m hồn. Ph&ugrave;ng nhanh ch&oacute;ng nhấc m&aacute;y ảnh l&ecirc;n v&agrave; chụp lại khoảnh khắc ấy. Ph&aacute;t hiện đầy thơ mộng với cảnh b&igrave;nh minh tr&ecirc;n biển mang đến một bức tranh thi&ecirc;n nhi&ecirc;n ho&agrave;n mĩ m&agrave; kh&ocirc;ng thể n&agrave;o t&igrave;m th&ecirc;m một từ ngữ n&agrave;o kh&aacute;c để ca ngợi vẻ đẹp cổ điển m&agrave; l&atilde;ng mạn của n&oacute;. Qua ph&aacute;t hiện thứ nhất ta thấy Ph&ugrave;ng Ph&ugrave;ng l&agrave; người nghệ sĩ ch&acirc;n ch&iacute;nh c&oacute; một t&acirc;m hồn nhạy cảm, tinh tế trước c&aacute;i đẹp. Anh đ&atilde; kh&aacute;m ra ch&acirc;n l&iacute; của sự ho&agrave;n thiện, cho rằng bản th&acirc;n của c&aacute;i đẹp ch&iacute;nh l&agrave; đạo đức. C&aacute;i đẹp phải thực sự c&oacute; t&iacute;nh hướng thiện.</p>
 <p>Nhưng sau khi chứng kiến những g&igrave; diễn ra tr&ecirc;n bờ biển trong buổi s&aacute;ng h&ocirc;m ấy, Ph&ugrave;ng đ&atilde; c&oacute; những thay đổi trong nhận thức về nghệ thuật. Đ&oacute; ch&iacute;nh l&agrave; ph&aacute;t hiện thứ hai của người nghệ sĩ nhiếp ảnh &ndash; một ph&aacute;t hiện trước bức tranh cuộc sống đầy bất ngờ v&agrave; nghịch l&iacute;. Một cảnh đời ngang tr&aacute;i đ&atilde; diễn ra khi chiếc thuyền tiến v&agrave;o bờ v&agrave; Ph&ugrave;ng đ&atilde; chứng kiến tất cả c&acirc;u chuyện đau l&ograve;ng của gia đ&igrave;nh l&agrave;ng ch&agrave;i ấy. Xuất hiện trước mắt anh l&agrave; h&igrave;nh ảnh một người đ&agrave;n b&agrave; trạc ngo&agrave;i bốn mươi tuổi, th&acirc;n h&igrave;nh cao lớn, rỗ mặt, gương mặt t&aacute;i ngắt, hiện l&ecirc;n sự mệt mỏi sau một đ&ecirc;m d&agrave;i thức trắng k&eacute;o lưới. V&agrave; tiếp đ&oacute; l&agrave; h&igrave;nh ảnh người đ&agrave;n &ocirc;ng đi sau với tấm lưng rộng v&agrave; cong như một chiếc thuyền, h&agrave;ng l&ocirc;ng m&agrave;y ch&aacute;y nắng rủ xuống hai con mắt đầy vẻ độc dữ&hellip;. Than &ocirc;i! C&ograve;n đ&acirc;u nữa n&eacute;t đẹp cổ điển v&agrave; l&atilde;ng mạn của bức tranh thi&ecirc;n nhi&ecirc;n &ldquo;to&agrave;n b&iacute;ch&rdquo; khi m&agrave; Ph&ugrave;ng tận mắt chứng kiến một trận l&ocirc;i đ&igrave;nh của l&atilde;o đ&agrave;n &ocirc;ng h&ugrave;ng hổ. Chẳng r&otilde; cơ sự thế n&agrave;o m&agrave; anh chỉ thấy l&atilde;o r&uacute;t chiếc thắt lưng của l&iacute;nh ngụy ng&agrave;y xưa rồi chẳng n&oacute;i chẳng rằng cứ thế quật tới tập v&agrave;o tấm lưng của người phụ nữ lam lũ ấy. Điều anh bận tậm nhất ch&iacute;nh l&agrave; việc người đ&agrave;n b&agrave; bị người chồng vũ phu v&agrave; độc &aacute;c đ&aacute;nh đập h&agrave;ng ng&agrave;y m&agrave; kh&ocirc;ng hề k&ecirc;u ca, chống đối g&igrave; cả. Phải chăng đ&oacute; l&agrave; một sự chịu đựng ho&agrave;n to&agrave;n tự nguyện? Mọi chuyện xảy ra đột ngột khiến người nghệ sĩ nhiếp ảnh kh&ocirc;ng khỏi kinh ngạc. Vấn đề lớn nhất m&agrave; người nghệ sĩ n&agrave;y nhận ra đ&oacute; l&agrave; khoảng c&aacute;ch giữa nghệ thuật v&agrave; cuộc sống. H&oacute;a ra cuộc sống của những con người lao động nơi đ&acirc;y kh&ocirc;ng hề vi&ecirc;n m&atilde;n như khung cảnh s&aacute;ng sớm b&igrave;nh minh đẹp m&ecirc; hồn ấy. Ph&ugrave;ng với những kh&aacute;m ph&aacute; s&acirc;u sắc về cuộc sống v&agrave; con người, anh nhận ra người nghệ sĩ phải c&oacute; c&aacute;i nh&igrave;n to&agrave;n diện, đa chiều, đi s&acirc;u v&agrave;o kh&aacute;m ph&aacute; bản chất b&ecirc;n trong chứ kh&ocirc;ng phải chỉ đứng từ &ldquo;ngo&agrave;i xa&rdquo; để quan s&aacute;t vẻ bề ngo&agrave;i.</p>
 <p>Vậy l&agrave; người nghệ sĩ đ&atilde; c&oacute; những ph&aacute;t hiện mới mẻ trong bức tranh thi&ecirc;n nhi&ecirc;n ho&agrave;n mĩ l&agrave; bức tranh cuộc sống đầy nghịch l&iacute; v&agrave; bất ngờ. Từ một chiếc thuyền đẹp như mơ đến cảnh tượng bạo lực của người đ&agrave;n &ocirc;ng độc &aacute;c khiến ai cũng phải sững sờ, hoảng hốt. Thương thay cho số kiếp l&ecirc;nh đ&ecirc;nh, khốn c&ugrave;ng của người đ&agrave;n b&agrave; l&agrave;ng ch&agrave;i. Ph&ugrave;ng kh&ocirc;ng thể đứng y&ecirc;n khi thấy người đ&agrave;n b&agrave; bị đ&aacute;nh đập d&atilde; man v&agrave; anh cũng muốn kh&aacute;m ph&aacute; những b&iacute; ẩn về th&acirc;n phận của một con người lu&ocirc;n giống như một ẩn số với anh. V&agrave; đ&oacute; ch&iacute;nh l&agrave; ph&aacute;t hiện thứ ba của người nghệ sĩ nhiếp ảnh với c&acirc;u chuyện của người đ&agrave;n b&agrave; ở to&agrave; &aacute;n huyện.</p>
 <p>Ph&ugrave;ng l&agrave; một người tốt bụng, nh&acirc;n hậu. C&acirc;u chuyện cuộc đời của người đ&agrave;n b&agrave; l&agrave;ng ch&agrave;i đ&atilde; khiến anh vỡ lẽ ra biết bao điều về con người v&agrave; cuộc sống: Những th&acirc;n phận đau khổ, những vẻ đẹp khuất lấp, những nghịch l&iacute; chưa thể giải quyết của đời sống hiện thực&hellip; Qua đấy ta thấy Ph&ugrave;ng l&agrave; một con người s&acirc;u sắc, anh mang nặng trong m&igrave;nh t&igrave;nh y&ecirc;u cuộc sống v&agrave; t&igrave;nh thương y&ecirc;u con người. Người nghệ sĩ nhiếp ảnh ấy đ&atilde; c&oacute; những động th&aacute;i t&aacute;c động v&agrave;o đời sống: can thiệp v&agrave;o việc người đ&agrave;n b&agrave; bị đ&aacute;nh tr&ecirc;n bờ biển, gặp gỡ tr&ograve; chuyện với con trai của chị &ndash; thằng Ph&aacute;c, c&ugrave;ng với ch&aacute;nh &aacute;n Đẩu t&igrave;m c&aacute;ch giải tho&aacute;t cho người đ&agrave;n b&agrave;. Nhưng tất cả những điều đ&oacute; dường như chưa đủ sau khi nghe người đ&agrave;n b&agrave; kể lại c&acirc;u chuyện cuộc đời m&igrave;nh tại t&ograve;a &aacute;n huyện. Người đ&agrave;n b&agrave; đ&atilde; từ chối dứt kho&aacute;t thiện &yacute; của người đại diện cho c&ocirc;ng l&iacute; l&agrave; muốn gi&uacute;p chị được giải ph&oacute;ng khỏi c&aacute;i &aacute;ch nặng nề của người chồng vũ phu, t&agrave;n bạo. Tới đ&acirc;y thi&ecirc;n truyện được mở n&uacute;t bằng lời giải của người đ&agrave;n b&agrave; ngh&egrave;o khổ. Thứ nhất chị l&agrave;m vậy l&agrave; v&igrave; t&igrave;nh thương đối với lũ con, ch&uacute;ng l&agrave; tất cả niềm vui v&agrave; niềm hạnh ph&uacute;c của chị, chị cam chịu v&igrave; con c&aacute;i. Thứ hai l&agrave; v&igrave; cuộc sống d&acirc;n ch&agrave;i lu&ocirc;n phải chống chọi với những bất trắc của biển cả n&ecirc;n việc c&oacute; người đ&agrave;n &ocirc;ng ch&egrave;o chống trong gia đ&igrave;nh rất cần thiết. Đ&oacute; l&agrave; những lời l&iacute; giải m&agrave; c&oacute; lẽ những ai c&oacute; c&aacute;i nh&igrave;n giản đơn, duy &yacute; ch&iacute; sẽ kh&ocirc;ng thể n&agrave;o m&agrave; hiểu được.</p>
 <p>Ph&ugrave;ng &ndash; nh&acirc;n vật ch&iacute;nh của truyện ngắn &ldquo;Chiếc thuyền ngo&agrave;i xa&rdquo;. Anh l&agrave; nơi m&agrave; t&aacute;c giả gửi gắm những th&ocirc;ng điệp s&acirc;u sắc, &yacute; nghĩa về nghệ thuật, những thấu hiểu v&agrave; lo &acirc;u hết sức đ&aacute;ng qu&yacute; của một người nghệ sĩ trước cuộc đời: tr&aacute;nh mọi c&aacute;i nh&igrave;n chủ quan, phiến diện một chiều, hay l&atilde;ng mạn h&oacute;a hiện thực. Ta phải nh&igrave;n thẳng v&agrave;o hiện thực bởi hiện thực v&agrave; con người rất phức tạp, đầy b&iacute; ẩn, kh&ocirc;ng thể coi l&agrave; c&aacute;i đ&atilde; biết trước.</p>
 <p>Truyện ngắn &ldquo;Chiếc thuyền ngo&agrave;i xa&rdquo; của Nguyễn Minh Ch&acirc;u viết về những &ldquo;con người đời thường&rdquo;, những số phận bi kịch đang bế tắc, quẩn quanh trong c&aacute;i đ&oacute;i, c&aacute;i ngh&egrave;o v&agrave; thất học. Đại diện cho cuộc sống đ&oacute; l&agrave; nh&acirc;n vật người đ&agrave;n b&agrave; l&agrave;ng ch&agrave;i. Bằng những mi&ecirc;u tả ch&acirc;n thực của Ph&ugrave;ng, chị hiện l&ecirc;n với h&igrave;nh ảnh người đ&agrave;n b&agrave; xấu x&iacute;, th&acirc;n h&igrave;nh cao lớn với những n&eacute;t th&ocirc; kệch. Từ nhỏ đ&atilde; l&agrave; một đứa con g&aacute;i xấu x&iacute;, lại rỗ mặt, kết h&ocirc;n với anh con trai của một nh&agrave; h&agrave;ng ch&agrave;i giữa ph&aacute;. Nhưng ẩn s&acirc;u trong đ&oacute; l&agrave; vẻ đẹp khuất lấp của người phụ nữ cam chịu lu&ocirc;n v&igrave; gia đ&igrave;nh. Người đ&agrave;n b&agrave; y&ecirc;u thương con hết mực, thị cam chịu cũng chỉ v&igrave; con c&aacute;i m&agrave; th&ocirc;i! C&acirc;u chuyện về cuộc đời của chị tại t&ograve;a &aacute;n huyện khiến Ph&ugrave;ng v&agrave; Đẩu phải thay đổi suy nghĩ. Người đ&agrave;n b&agrave; h&oacute;a ra kh&ocirc;ng hề ngờ nghệch, cố chấp cam chịu một c&aacute;ch v&ocirc; l&iacute; m&agrave; l&agrave; người s&acirc;u sắc. Chị biết chắt chiu hạnh ph&uacute;c. Trong chị, ta thấy thấp tho&aacute;ng những phẩm chất cao đẹp của người phụ nữ Việt Nam: nh&acirc;n hậu, bao dung, gi&agrave;u đức hy sinh v&igrave; chồng, v&igrave; con.</p>
 <p>Bằng t&agrave;i năng của m&igrave;nh, Nguyễn Minh Ch&acirc;u đ&atilde; khắc họa th&agrave;nh c&ocirc;ng h&igrave;nh ảnh c&aacute;c nhận vật phụ như người chồng độc &aacute;c hay chị em thằng Ph&aacute;c. Từ đ&oacute; g&oacute;p phần l&agrave;m cho thi&ecirc;n truyện th&ecirc;m phần kịch t&iacute;nh, hấp dẫn. Ta thấy ở người đ&agrave;n đ&ocirc;ng l&agrave; một người chồng độc &aacute;c, lu&ocirc;n dở th&oacute;i vũ phu với vợ, d&aacute;ng vẻ khắc khổ, lời n&oacute;i cục cằn, hung dữ&hellip; C&ograve;n chị thằng Ph&aacute;c l&agrave; một c&ocirc; b&eacute; yếu ớt m&agrave; can đảm, y&ecirc;u thương mẹ v&agrave; em. Cuối c&ugrave;ng l&agrave; cậu b&eacute; Ph&aacute;c &ndash; người lu&ocirc;n muốn bảo vệ mẹ khỏi những trận đ&aacute;nh đập t&agrave;n bạo của người cha, c&oacute; những h&agrave;nh động bảo vệ mẹ của một đứa trẻ miền biển.</p>
 <p>Tất cả những nh&acirc;n vật ấy c&agrave;ng chứng tỏ một điều rằng họ l&agrave; nạn nh&acirc;n của nhau. Nhưng đồng thời nh&igrave;n rộng ra th&igrave; họ ch&iacute;nh l&agrave; nạn nh&acirc;n của ho&agrave;n cảnh, một hiện thực nghiệt ng&atilde; m&agrave; chỉ Nguyễn Minh Ch&acirc;u mới d&aacute;m n&oacute;i l&ecirc;n v&agrave;o thời điểm s&aacute;ng t&aacute;c &ldquo;nhạy cảm&rdquo; ấy. Người đ&agrave;n b&agrave; l&agrave; nạn nh&acirc;n ch&iacute;nh, người đ&agrave;n &ocirc;ng vừa l&agrave; thủ phạm, vừa l&agrave; nạn nh&acirc;n &hellip; Đứa con l&agrave; nạn nh&acirc;n, m&agrave; cũng c&oacute; thể Ph&aacute;c sẽ l&agrave; một thủ phạm kh&aacute;c trong tương lai?</p>
 <p>Chiếc thuyền ngo&agrave;i xa l&agrave; một ẩn dụ về mối quan hệ giữa cuộc đời v&agrave; nghệ thuật, l&agrave; c&aacute;ch nh&igrave;n nhận v&agrave; tiếp cận nghệ thuật ch&acirc;n ch&iacute;nh: xa v&agrave; gần, ngo&agrave;i v&agrave; thẳm s&acirc;u. Dưới ng&ograve;i b&uacute;t t&agrave;i hoa của Nguyễn Minh Ch&acirc;u c&aacute;c nhận vật trong truyện hiện l&ecirc;n sinh động qua lối văn giản dị m&agrave; s&acirc;u sắc. C&aacute;ch khắc họa h&igrave;nh tượng nh&acirc;n vật v&ocirc; c&ugrave;ng độc đ&aacute;o, x&acirc;y dựng cốt truyện, sử dụng ng&ocirc;n ngữ linh hoạt, s&aacute;ng tạo. G&oacute;p phần l&agrave;m nổi bật chủ đề &ndash; tư tưởng t&aacute;c giả muốn gửi gắm qua t&aacute;c phẩm &ldquo;Chiếc thuyền ngo&agrave;i xa&rdquo;</p>
 <p>Quả thực truyện ngắn &ldquo;Chiếc thuyền ngo&agrave;i xa&rdquo; như l&agrave; một &ldquo;tuy&ecirc;n ng&ocirc;n về nghệ thuật&rdquo; trong thời kỳ Đổi Mới của văn học Việt Nam hiện đại, những năm 80 của thế kỷ XX. Qua t&aacute;c phẩm ch&uacute;ng ta c&oacute; thể r&uacute;t ra b&agrave;i học s&acirc;u sắc rằng: trước một hiện thực đời sống phức tạp, trước những số phận c&ograve;n nhiều &eacute;o le ta phải c&oacute; một c&aacute;i nh&igrave;n to&agrave;n diện, tuyệnt đối tr&aacute;nh chủ nghĩa chủ quan duy &yacute; ch&iacute;. Ta kh&ocirc;ng thể say sưa với chiến thắng m&agrave; qu&ecirc;n đi thực tiễn trước mắt. Truyện ngắn &ldquo;Chiếc thuyền ngo&agrave;i xa&rdquo; sẽ c&ograve;n để lại trong ta nhiều suy ngẫm về mối quan hệ giữa nghệ thuật v&agrave; cuộc đời.</p>`,
        featuredImage:
          'https://i.ibb.co/jkbctN8/phan-tich-chiec-thuyen-ngoai-xa.jpg',
        featured: false,
        view: Math.round(Math.random() * 10000),
        likeCount: Math.round(Math.random() * 1000),
        dislikeCount: Math.round(Math.random() * 100),
        status: 'PUBLISHED',
        createdBy: 1,
        literary: 5,
      },
      {
        postId: 8,
        title:
          'Phân tích hai phát hiện của nhân vật Phùng trong truyện ngắn Chiếc thuyền ngoài xa',
        slug: 'phan-tich-hai-phat-hien-cua-nguoi-nghe-si-nhiep-anh-phung-trong-truyen-ngan-chiec-thuyen-ngoai-xa',
        summary:
          'Nói về Nguyễn Minh Châu và những sáng tác của ông Tô Hoài đã có những lời thật đúng đắn rằng “Đọc Nguyễn Minh Châu, người ta thấy cuộc đời và trang sách liền nhau. Chặng đường đời hôm nay cũng như từng đoạn sáng tạo trên trang giấy của tài năng. Những cái tưởng như bình thường lặt vặt trong cuộc sống hằng ngày dưới con mắt và ngòi bút của Nguyễn Minh Châu đều trở thành những gợi ý đáng suy nghĩ và có tầm triết lý”',
        htmlContent: `<p style="text-align: justify;">N&oacute;i về Nguyễn Minh Ch&acirc;u v&agrave; những s&aacute;ng t&aacute;c của &ocirc;ng T&ocirc; Ho&agrave;i đ&atilde; c&oacute; những lời thật đ&uacute;ng đắn rằng &ldquo;Đọc Nguyễn Minh Ch&acirc;u, người ta thấy cuộc đời v&agrave; trang s&aacute;ch liền nhau. Chặng đường đời h&ocirc;m nay cũng như từng đoạn s&aacute;ng tạo tr&ecirc;n trang giấy của t&agrave;i năng. Những c&aacute;i tưởng như b&igrave;nh thường lặt vặt trong cuộc sống hằng ng&agrave;y dưới con mắt v&agrave; ng&ograve;i b&uacute;t của Nguyễn Minh Ch&acirc;u đều trở th&agrave;nh những gợi &yacute; đ&aacute;ng suy nghĩ v&agrave; c&oacute; tầm triết l&yacute;&rdquo;.</p>
 <p style="text-align: justify;">Quả thực đ&uacute;ng vậy, đọc nhiều những t&aacute;c phẩm của Nguyễn Minh Ch&acirc;u, đặc biệt l&agrave; c&aacute;c t&aacute;c phẩm thời kỳ hậu chiến, từ những năm 80 trở đi, khi nh&agrave; văn từ gi&atilde; đề t&agrave;i chiến tranh để đi s&acirc;u v&agrave;o vấn đề đạo đức thế sự, v&agrave; số phận con người trong x&atilde; hội thời kỳ đổi mới, ta thấy trong những c&acirc;u chuyện b&igrave;nh thường, lu&ocirc;n ẩn hiện nhiều tầng triết l&yacute;. Đặc biệt l&agrave; lối kể, lối viết đi s&acirc;u v&agrave;o nội t&acirc;m, cũng như những c&acirc;u chuyện ri&ecirc;ng của từng nh&acirc;n vật, đ&atilde; mang đến cho người đọc nhiều trải nghiệm ấn tượng. Chiếc thuyền ngo&agrave;i xa l&agrave; một trong những t&aacute;c phẩm xuất sắc v&agrave; ti&ecirc;u biểu nhất trong đời s&aacute;ng t&aacute;c của Nguyễn Minh Ch&acirc;u. Th&ocirc;ng qua bước ch&acirc;n v&agrave; hai ph&aacute;t hiện đặc sắc của nhiếp ảnh gia Ph&ugrave;ng, t&aacute;c giả đ&atilde; mang đến cho người đọc những triết l&yacute; nh&acirc;n sinh s&acirc;u sắc về c&aacute;ch nh&igrave;n nhận vấn đề trong cuộc sống, mối tương quan giữa cuộc đời v&agrave; nghệ thuật, đồng thời cũng bộc lộ nhưng niềm trăn trở của &ocirc;ng về số phận của con người trong x&atilde; hội những năm th&aacute;ng sau chiến tranh.</p>
 <p style="text-align: justify;"><img src="https://o.rada.vn/data/image/2021/04/03/Hai-phat-hien-cua-phung.jpg"></p>
 <p style="text-align: justify;">Nh&acirc;n vật Ph&ugrave;ng trong c&acirc;u chuyện của Nguyễn Minh Ch&acirc;u vốn từng l&agrave; một người l&iacute;nh tham gia v&agrave;o cuộc kh&aacute;ng chiến chống Mỹ, sau khi h&ograve;a b&igrave;nh lập lại Ph&ugrave;ng đảm nhận vị tr&iacute; một nhiếp ảnh trong một t&ograve;a soạn b&aacute;o. Để c&oacute; được một bức ảnh về miền biển in trong cuốn lịch cuối năm m&agrave; trưởng ph&ograve;ng giao ph&oacute;, Ph&ugrave;ng đ&atilde; t&igrave;m về một v&ugrave;ng biển miền Trung, nơi đ&atilde; từng l&agrave; chiến trường cũ, đồng thời cũng l&agrave; dịp để anh gh&eacute; thăm Đẩu- người đồng đội cũ của m&igrave;nh. Sau suốt nhiều ng&agrave;y chờ đợi, săn t&igrave;m, nhưng Ph&ugrave;ng vẫn chưa c&oacute; cho m&igrave;nh một bức ảnh thật ưng &yacute;, bởi lẽ anh l&agrave; một người y&ecirc;u nghệ thuật v&agrave; lu&ocirc;n c&oacute; những y&ecirc;u cầu rất cao về thẩm mỹ, ch&iacute;nh v&igrave; vậy Ph&ugrave;ng kh&ocirc;ng cho ph&eacute;p m&igrave;nh sơ s&agrave;i, hời hợt. Ph&ugrave;ng phải chờ đợi suốt hơn tuần liền m&agrave; cuộn phim trong m&aacute;y vẫn chẳng x&ecirc; dịch mấy. Nhưng may mắn thay, dường như &ocirc;ng thời biết được tấm l&ograve;ng của người nghệ sĩ n&ecirc;n đ&atilde; để anh chứng kiến được một khung cảnh ho&agrave;n mỹ, c&aacute;i m&agrave; Ph&ugrave;ng v&iacute; như cảnh &ldquo;đắt&rdquo; trời cho, cả đời người nghệ sĩ kh&eacute;o cũng chưa thấy được một lần. Đ&acirc;y cũng ch&iacute;nh l&agrave; ph&aacute;t hiện đầu ti&ecirc;n của Ph&ugrave;ng trong chuyến đi c&ocirc;ng t&aacute;c.</p>
 <p style="text-align: justify;">&nbsp;</p>
 <p style="text-align: justify;">Buổi sớm định mệnh h&ocirc;m ấy, khi Ph&ugrave;ng đang loay hoay n&uacute;p sau chiếc xe tăng cũ để tr&uacute; cơn mưa ph&ugrave;n lất phất, th&igrave; từ đằng xa bỗng c&oacute; một con thuyền lưới c&aacute; dần dần cập bến trong &aacute;nh sương lẫn ban mai mờ mờ tựa như một &ldquo;một bức tranh mực t&agrave;u của một danh họa thời cổ&rdquo;. Vẻ đẹp ấy được Nguyễn Minh Ch&acirc;u ph&aacute;c lại bằng những n&eacute;t vẽ thật giản đơn v&agrave; cổ điển &ldquo;Mũi thuyền in một n&eacute;t mơ hồ l&ograve;e nh&ograve;e v&agrave;o bầu sương m&ugrave; trắng như sữa c&oacute; pha đ&ocirc;i ch&uacute;t m&agrave;u hồng hồng do &aacute;nh mặt trời chiếu v&agrave;o. V&agrave;i b&oacute;ng người lớn lẫn trẻ con ngồi im phăng phắc như tượng tr&ecirc;n chiếc mui khum khum đang hướng mặt v&agrave;o bờ&hellip;&rdquo;. Người nghệ sĩ với tấm l&ograve;ng t&ocirc;n thờ sự ho&agrave;n mỹ trong nghệ thuật đ&atilde; kh&ocirc;ng thể kiềm l&ograve;ng m&agrave; nhận định rằng khung cảnh trước mắt anh quả thực l&agrave; một vẻ đẹp &ldquo;đơn giản v&agrave; to&agrave;n b&iacute;ch&rdquo;. Ph&ugrave;ng đứng trước ph&aacute;t hiện bất ngờ n&agrave;y ho&agrave;n to&agrave;n trở n&ecirc;n bối rối, tựa như một ch&agrave;ng trai khi đối diện với t&igrave;nh đầu, &ldquo;tr&aacute;i tim như c&oacute; g&igrave; đ&oacute; b&oacute;p thắt v&agrave;o&rdquo;, một cảm gi&aacute;c m&agrave; trước đ&acirc;y Ph&ugrave;ng chưa thấy bao giờ. Tất cả đều bộc lộ niềm sung sướng, hạnh ph&uacute;c đến tột c&ugrave;ng của người nghệ sĩ khi may mắn bắt gặp được cảnh tượng qu&yacute; gi&aacute; nhất trong đời cầm m&aacute;y.</p>
 <p style="text-align: justify;">Ngay trước ph&aacute;t hiện tuyệt vời về cảnh &ldquo;đắt&rdquo; trời cho l&uacute;c buổi sương sớm, Ph&ugrave;ng đ&atilde; tưởng như m&igrave;nh vừa kh&aacute;m ph&aacute; được một định nghĩa mới của c&aacute;i đẹp rằng &ldquo;bản th&acirc;n c&aacute;i đẹp l&agrave; đạo đức&rdquo;, thậm ch&iacute; đầu &oacute;c Ph&ugrave;ng l&uacute;c n&agrave;y chỉ to&agrave;n những x&uacute;c cảm tuyệt vời khi tưởng như m&igrave;nh vừa ph&aacute;t hiện ra ch&acirc;n l&yacute; của sự to&agrave;n thiện, tuyệt mỹ, kh&aacute;m ph&aacute; ra c&aacute;i &ldquo;khoảnh khắc trong ngần của t&acirc;m hồn&rdquo;. Phải n&oacute;i rằng trước cảnh đẹp trời ban, tr&aacute;i tim Ph&ugrave;ng dường như vừa được khai mở v&agrave; c&oacute; một vầng s&aacute;ng vĩ đại soi chiếu, khiến t&acirc;m hồn của người nghệ sĩ trở n&ecirc;n rộng mở v&agrave; thăng hoa đến tột c&ugrave;ng của x&uacute;c cảm. Kh&ocirc;ng chần chừ l&acirc;u, Ph&ugrave;ng lập tức đưa m&aacute;y l&ecirc;n bấm &ldquo;li&ecirc;n thanh&rdquo; hết ba phần tư cuốn phim m&agrave; chẳng cần &ldquo;x&ecirc; dịch&rdquo; g&igrave; nữa, dường như anh đ&atilde; thu v&agrave;o chiếc m&aacute;y ảnh của m&igrave;nh tất cả c&aacute;i &ldquo;khoảnh khắc hạnh ph&uacute;c tr&agrave;n ngập trong t&acirc;m hồn m&igrave;nh, do c&aacute;i đẹp ngoại cảnh mang lại&rdquo;.</p>
 <p style="text-align: justify;">C&oacute; thể n&oacute;i rằng đối với nghệ sĩ Ph&ugrave;ng, cũng như đối với tất cả những người y&ecirc;u nghệ thuật, hết l&ograve;ng v&igrave; c&aacute;i đẹp, th&igrave; việc bắt được một cảnh &ldquo;đắt&rdquo; trời cho như vậy l&agrave; niềm hạnh ph&uacute;c kh&ocirc;ng g&igrave; c&oacute; thể s&aacute;nh bằng. Cảnh một chiếc thuyền lưới c&aacute;, cũ, nhỏ v&agrave; đơn sơ, c&ugrave;ng với những ngư d&acirc;n từ từ cập bến c&oacute; thể n&oacute;i l&agrave; một cảnh tượng kh&aacute; quen thuộc v&agrave; b&igrave;nh thường ở miền biển. Tuy nhi&ecirc;n ch&iacute;nh những thứ tưởng chừng nhỏ nhặt, giản đơn ấy, khi kết hợp với nhau, lại trở th&agrave;nh bức tranh mỹ cảnh hiếm c&oacute; trong đ&ocirc;i mắt đa cảm của người nghệ sĩ. Ph&aacute;t hiện đầu ti&ecirc;n của Ph&ugrave;ng trong chuyến c&ocirc;ng t&aacute;c d&agrave;i ng&agrave;y c&oacute; nhiều ẩn &yacute;, đầu ti&ecirc;n l&agrave; quan niệm về c&aacute;i đẹp trong vũ trụ của Nguyễn Minh Ch&acirc;u hầu như đều xuất ph&aacute;t từ những sự vật, sự việc thực b&igrave;nh thường, m&agrave; người nghệ sĩ ch&acirc;n ch&iacute;nh phải d&ugrave;ng tấm l&ograve;ng ch&acirc;n th&agrave;nh, tinh tế v&agrave; nhạy cảm để ph&aacute;t hiện v&agrave; ghi nhận.</p>
 <p style="text-align: justify;">Thứ hai nữa, ph&aacute;t hiện của Ph&ugrave;ng c&ograve;n l&agrave; tượng trưng cho những vẻ đẹp duy mỹ, kh&ocirc;ng tỳ vết, l&agrave; những thứ m&agrave; con người hằng theo đuổi ao ước đạt được, tuy nhi&ecirc;n để đạt được n&oacute; con người ta đều phải trải qua qu&aacute; tr&igrave;nh lao động miệt m&agrave;i, l&ograve;ng ki&ecirc;n nhẫn th&igrave; mới nhận được quả ngọt. Kh&ocirc;ng chỉ vậy, bằng ng&ograve;i b&uacute;t tinh anh Nguyễn Minh Ch&acirc;u c&ograve;n th&ocirc;ng qua nh&acirc;n vật Ph&ugrave;ng để thể hiện tấm l&ograve;ng y&ecirc;u nghệ thuật s&acirc;u sắc của một người nghệ sĩ ch&acirc;n ch&iacute;nh, nhất quyết kh&ocirc;ng chịu chấp nhận những thứ nghệ thuật sơ s&agrave;i, gượng &eacute;p, đồng thời cũng bộc lộ quan điểm &ldquo;bản chất của c&aacute;i đẹp l&agrave; đạo đức&rdquo;, d&ugrave; rằng trong ph&aacute;t hiện đầu ti&ecirc;n, triết l&yacute; n&agrave;y vẫn chưa được khai mở r&otilde; r&agrave;ng, m&agrave; chỉ được n&ecirc;u ra th&ocirc;ng qua nh&acirc;n vật Ph&ugrave;ng, trong l&uacute;c anh mải m&ecirc; bối rối, say m&ecirc; với cảnh đẹp tuyệt đỉnh trước mắt. Cuối c&ugrave;ng tổng kết lại sau tất cả những ẩn &yacute; về ph&aacute;t hiện đầu ti&ecirc;n của Ph&ugrave;ng, Nguyễn Minh Ch&acirc;u muốn chỉ ra rằng đằng sau những c&aacute;i đẹp vốn c&oacute; của tự nhi&ecirc;n đ&oacute; ch&iacute;nh l&agrave; vẻ đẹp t&acirc;m hồn của con người. Bởi lẽ nếu kh&ocirc;ng c&oacute; một t&acirc;m hồn nhạy cảm trước c&aacute;i đẹp, l&ograve;ng ki&ecirc;n nhẫn, say m&ecirc; với c&ocirc;ng việc, bất chấp thời gian, thời tiết c&oacute; lẽ Ph&ugrave;ng đ&atilde; chẳng thể bắt lấy c&aacute;i cảnh to&agrave;n b&iacute;ch như một bức tranh của danh họa thời cổ, để rồi phải ng&acirc;y người v&igrave; qu&aacute; đỗi sung sướng trước th&agrave;nh quả m&agrave; m&igrave;nh đạt được.</p>
 <p style="text-align: justify;">Tuy nhi&ecirc;n t&igrave;nh huống truyện trở n&ecirc;n đặc sắc hơn khi Ph&ugrave;ng tiếp tục c&oacute; ph&aacute;t hiện thứ hai, một ph&aacute;t hiện dường như đ&atilde; đ&aacute;nh vỡ n&aacute;t c&aacute;i mộng tưởng, cũng như niềm sung sướng tự h&agrave;o khi bản th&acirc;n ph&aacute;t hiện ra c&aacute;i đẹp to&agrave;n b&iacute;ch v&agrave; ch&acirc;n l&yacute; của cuộc đời người nghệ sĩ. Ngay l&uacute;c Ph&ugrave;ng thu m&aacute;y, chuẩn bị đi về để ho&agrave;n th&agrave;nh b&aacute;o c&aacute;o, th&igrave; chiếc thuyền cũng cập bến, bức tranh dần tan đi c&aacute;i vẻ tĩnh lặng, y&ecirc;n b&igrave;nh, thay v&agrave;o đ&oacute; l&agrave; sự vận động đến từ những con người tr&ecirc;n chiếc thuyền. C&aacute;i &ldquo;đạo đức&rdquo; m&agrave; Ph&ugrave;ng hằng t&acirc;m niệm bỗng chốc bị c&acirc;u n&oacute;i &ldquo;Cứ ngồi im đấy. Động đậy tao giết cả m&agrave;y b&acirc;y giờ&rdquo; ph&aacute; n&aacute;t, một c&acirc;u hăm dọa gh&ecirc; gớm, đ&atilde; x&eacute; toang bức tranh hiền h&ograve;a người nghệ sĩ vừa kịp thu v&agrave;o trong m&aacute;y, trước sự ngỡ ng&agrave;ng của anh.</p>
 <p style="text-align: justify;">Ngay sau đ&oacute;, Ph&ugrave;ng thấy bước xuống từ chiếc thuyền đ&oacute; một người đ&agrave;n b&agrave; cao lớn, đường n&eacute;t th&ocirc; kệch xấu x&iacute;, khu&ocirc;n mặt rỗ v&agrave; x&aacute;m xịt v&igrave; thức đ&ecirc;m, người đ&agrave;n &ocirc;ng đi sau, lưng c&ograve;ng, t&oacute;c tổ quạ, ch&acirc;n đi chữ b&aacute;t, khu&ocirc;n mặt dữ tợn nh&igrave;n ch&ograve;ng chọc như muốn đ&acirc;m thủng tấm lưng r&aacute;ch rưới của người đ&agrave;n b&agrave;. Tất cả cảnh tượng ấy, đều chỉ c&oacute; thể t&oacute;m gọn lại bằng hai chữ &ldquo;thảm hại&rdquo;, v&agrave; chắc chắn kh&aacute;c xa so với những g&igrave; Ph&ugrave;ng tưởng tượng về h&igrave;nh tượng người d&acirc;n ch&agrave;i k&eacute;o lưới, nhưng thực tế th&igrave; lu&ocirc;n sẵn s&agrave;ng t&aacute;t v&agrave;o mặt kẻ mộng mơ l&agrave; thế. Tuy nhi&ecirc;n điều khủng khiếp hơn c&ograve;n ở ph&iacute;a sau, khi Ph&ugrave;ng tận mắt chứng kiến một cuộc ẩu đả đơn phương, một cuộc bạo lực gia đ&igrave;nh gh&ecirc; gớm, khi g&atilde; đ&agrave;n &ocirc;ng r&uacute;t chiếc thắt lưng li&ecirc;n tiếp quất v&agrave;o người đ&agrave;n b&agrave;, vừa đ&aacute;nh vừa r&iacute;t l&ecirc;n những tiếng o&aacute;n hận, m&agrave; c&oacute; lẽ chỉ c&oacute; kẻ th&ugrave; mới d&agrave;nh cho nhau &ldquo;M&agrave;y chết đi cho &ocirc;ng nhờ, ch&uacute;ng m&agrave;y chết hết đi cho &ocirc;ng nhờ. C&ograve;n người đ&agrave;n b&agrave; lại cam chịu, kh&ocirc;ng chống trả, cứ mặc cho người đ&agrave;n &ocirc;ng chửi rủa đ&aacute;nh đập.</p>
 <p style="text-align: justify;">Ph&ugrave;ng khi chứng kiến cảnh tượng kinh ho&agrave;ng ấy đ&atilde; kh&ocirc;ng thể tin v&agrave;o mắt m&igrave;nh, bởi lẽ trước đ&oacute; c&aacute;i cảnh gia đ&igrave;nh y&ecirc;n ấm, sum họp tr&ecirc;n chiếc thuyền nhỏ v&agrave;o buổi b&igrave;nh minh c&ograve;n khiến anh ng&acirc;y ngất, say m&ecirc; chưa dứt, th&igrave; những g&igrave; diễn ra dường như khiến anh kh&ocirc;ng kịp trở tay. Ph&ugrave;ng kinh ngạc đến mức trong mấy ph&uacute;t đầu chỉ biết đứng h&aacute; hốc mồm ra nh&igrave;n, điều đ&oacute; khiến ta li&ecirc;n tưởng đến cảm gi&aacute;c của Ph&ugrave;ng trong ph&aacute;t hiện đầu ti&ecirc;n, Ph&ugrave;ng cũng ngỡ ng&agrave;ng như thế. C&oacute; thể n&oacute;i rằng trong một buổi s&aacute;ng Ph&ugrave;ng đ&atilde; hai lần g&acirc;y ra, n&atilde;o bộ kh&ocirc;ng kịp tiếp thu những g&igrave; m&agrave; anh nh&igrave;n thấy, một lần l&agrave; v&igrave; cho&aacute;ng ngợp trước vẻ đẹp tuyệt mỹ của tạo h&oacute;a, c&ograve;n một lần kh&aacute;c l&agrave; cảm gi&aacute;c kh&ocirc;ng thể tin nổi trước khi buộc phải chứng kiến những cảnh tượng xấu x&iacute; nhất của cuộc sống. Gia đ&igrave;nh vốn l&agrave; hạt giống l&agrave; điển h&igrave;nh của một x&atilde; hội, n&oacute; c&oacute; tốt đẹp th&igrave; đất nước mới c&oacute; thể đi l&ecirc;n. Một con người c&oacute; nhiều năm th&aacute;ng bu&ocirc;n ba tr&ecirc;n khắp c&aacute;c chiến trường, chiến đấu v&igrave; l&yacute; tưởng giải ph&oacute;ng đất nước v&agrave; con người, th&acirc;m t&acirc;m Ph&ugrave;ng những tưởng sau chiến tranh đất nước y&ecirc;n b&igrave;nh, sẽ chẳng c&ograve;n những cảnh tượng khủng khiếp v&agrave; đau l&ograve;ng, m&agrave; chỉ c&ograve;n những cảnh đẹp của thế gian. Thế nhưng hiện thực đ&atilde; chứng minh rằng, suy nghĩ của Ph&ugrave;ng thực c&ograve;n qu&aacute; n&ocirc;ng cạn, cuộc sống v&agrave; số phận của nhiều con người vẫn c&ograve;n đang ch&igrave;m trong đau thương, trước đ&acirc;y họ đau khổ v&igrave; chia ly v&igrave; chiến tranh, mất m&aacute;t, th&igrave; đến h&ocirc;m nay d&ugrave; h&ograve;a b&igrave;nh đ&atilde; lập lại nhưng g&aacute;nh nặng của họ lại l&agrave; đ&oacute;i ngh&egrave;o, sự khuyết thiếu văn h&oacute;a. Hai vợ chồng người đ&agrave;n b&agrave; l&agrave;ng ch&agrave;i l&agrave; những điển h&igrave;nh r&otilde; rệt nhất, đ&oacute;i ngh&egrave;o bức &eacute;p khiến họ phải vật lộn mưu sinh, tr&igrave;nh độ thấp dẫn tới cảnh tượng bạo lực gia đ&igrave;nh v&agrave; phải đối mặt với sự vỡ kế hoạch, l&agrave;m g&aacute;nh nặng tr&ecirc;n đ&ocirc;i vai hai vợ chồng c&agrave;ng tăng th&ecirc;m, điều đ&oacute; đ&atilde; trở th&agrave;nh một v&ograve;ng luẩn quẩn kh&ocirc;ng lối tho&aacute;t.</p>
 <p style="text-align: justify;">Như vậy trong ph&aacute;t hiện thứ hai của nh&acirc;n vật Ph&ugrave;ng, th&ocirc;ng qua cảnh tượng khủng khiếp ấy, Nguyễn Minh Ch&acirc;u đ&atilde; v&eacute;n ra bức m&agrave;n đang che mắt những con người l&agrave;m nghệ thuật, &ocirc;ng chỉ ra rằng đằng sau những vẻ đẹp tuyệt mỹ, to&agrave;n b&iacute;ch nhiều khi lại ch&iacute;nh l&agrave; những cảnh tượng đau thương nhất. Người n&ocirc;ng cạn chỉ nh&igrave;n thấy c&aacute;i đẹp, c&aacute;i ho&agrave;n hảo như l&ograve;ng m&igrave;nh mong ước, nhưng người nghệ sĩ thực sự lại phải l&agrave; người đ&agrave;o s&acirc;u t&igrave;m kỹ, ph&aacute;t hiện được cả những g&oacute;c khuất v&agrave; đặc biệt l&agrave; c&oacute; tấm l&ograve;ng nh&acirc;n hậu, quan t&acirc;m đến số phận những con người tội nghiệp đang bị che lấp bởi vỏ bọc đẹp đẽ. Nghệ thuật kh&ocirc;ng chỉ l&agrave; nghệ thuật m&agrave; n&oacute; c&ograve;n phải gắn liền với cuộc đời, vẫn biết rằng c&aacute;i đẹp đều xuất ph&aacute;t từ cuộc đời, nhưng chẳng phải cuộc đời n&agrave;o cũng đẹp v&agrave; ho&agrave;n to&agrave;n đẹp, người ta vẫn nh&igrave;n thấy đ&acirc;u đ&oacute; những sự sứt sẹo, những c&aacute;i xấu xa đang hiện diện đầy rẫy v&agrave; đ&ocirc;i khi chỉ c&aacute;ch c&aacute;i đẹp to&agrave;n mỹ một bức m&agrave;n thật mỏng, v&agrave; sẵn s&agrave;ng đ&aacute;nh vỡ những c&aacute;i đẹp tưởng như trong ngần, tuyệt diệu nhất. Điều đ&oacute; chỉ ra một con đường mới cho những người l&agrave;m nghệ thuật, c&oacute; lẽ rằng họ phải thay đổi c&aacute;ch nh&igrave;n nhận về c&aacute;i đẹp, thay v&igrave; đi m&atilde;i một lối m&ograve;n săn t&igrave;m c&aacute;i đẹp của tạo h&oacute;a, của trời ban, phải chăng họ c&ograve;n n&ecirc;n nh&igrave;n v&agrave;o cuộc đời, v&agrave;o thực tế để khai th&aacute;c những hạt ngọc qu&yacute; trong t&acirc;m hồn con người, như c&aacute;i c&aacute;ch m&agrave; Nguyễn Minh Ch&acirc;u đ&atilde; khai th&aacute;c vẻ đẹp t&acirc;m hồn của người đ&agrave;n b&agrave; l&agrave;ng ch&agrave;i. Nếu v&iacute; c&aacute;i đẹp như lớp m&agrave;ng mỏng che lấp c&aacute;i xấu, th&igrave; ngược lại c&aacute;i xấu x&iacute; lại như lớp vỏ x&ugrave; x&igrave;, th&ocirc; r&aacute;p bao bọc lấy c&aacute;i đẹp, m&agrave; kh&ocirc;ng phải người nghệ sĩ n&agrave;o cũng đủ sự tinh tế, nhạy cảm v&agrave; l&ograve;ng y&ecirc;u thương để khai th&aacute;c v&agrave; cảm nhận được n&oacute;.</p>
 <p style="text-align: justify;">Chiếc thuyền ngo&agrave;i xa l&agrave; một t&aacute;c phẩm đặc sắc với c&aacute;ch x&acirc;y dựng t&igrave;nh huống truyện độc đ&aacute;o, lồng gh&eacute;p nhiều triết l&yacute; nh&acirc;n sinh v&agrave; quan niệm l&agrave;m nghệ thuật. Đặc biệt trong t&igrave;nh huống truyện tr&ecirc;n b&atilde;i biển, hai ph&aacute;t hiện của Ph&ugrave;ng với sự đối lập nhau r&otilde; n&eacute;t đ&atilde; l&agrave;m nổi bật chủ đề c&acirc;u chuyện cũng như dụng &yacute; m&agrave; t&aacute;c giả muốn hướng tới &ndash; việc t&igrave;m kiếm c&aacute;i đẹp trong t&acirc;m hồn con người, cũng như đi t&igrave;m c&acirc;u hỏi cho mối li&ecirc;n quan giữa nghệ thuật v&agrave; cuộc sống.</p>`,
        featuredImage:
          'https://i.ibb.co/8M9qMmq/cam-nhan-nhan-vat-Phung-trong-chiec-thuyen-ngoai-xa.jpg',
        featured: false,
        view: Math.round(Math.random() * 10000),
        likeCount: Math.round(Math.random() * 1000),
        dislikeCount: Math.round(Math.random() * 100),
        status: 'PUBLISHED',
        createdBy: 1,
        literary: 5,
      },
      {
        postId: 9,
        title:
          'Nhận xét về vẻ đẹp tâm hồn người phụ nữ trong tình yêu được thể hiện qua bài thơ Sóng',
        slug: 'nhan-xet-ve-ve-dep-tam-hon-nguoi-phu-nu-trong-tinh-yeu-duoc-the-hien-qua-bai-tho-song',
        summary:
          'Xuân Quỳnh là một trong những nhà thơ nữ tiêu biểu của văn học Việt Nam. Nhắc đến Xuân Quỳnh chắc hẳn người đọc sẽ nhớ đến những vần thơ dạt dào cảm xúc về tình yêu đôi lứa. Đặc biệt qua tác phẩm Sóng, chúng ta lại càng cảm nhận được những nét tươi mới về tình yêu tuổi trẻ đã được tác giả thể hiện một cách rất tinh tế qua các vần thơ, đặc biệt là những cảm xúc của người phụ nữ đang yêu đã được thể hiện qua bài thơ Sóng.',
        htmlContent: `<p>Xu&acirc;n Quỳnh l&agrave; một trong những nh&agrave; thơ nữ ti&ecirc;u biểu của văn học Việt Nam. Nhắc đến Xu&acirc;n Quỳnh chắc hẳn người đọc sẽ nhớ đến những vần thơ dạt d&agrave;o cảm x&uacute;c về t&igrave;nh y&ecirc;u đ&ocirc;i lứa. Đặc biệt qua t&aacute;c phẩm S&oacute;ng, ch&uacute;ng ta lại c&agrave;ng cảm nhận được những n&eacute;t tươi mới về t&igrave;nh y&ecirc;u tuổi trẻ đ&atilde; được t&aacute;c giả thể hiện một c&aacute;ch rất tinh tế qua c&aacute;c vần thơ, đặc biệt l&agrave; những cảm x&uacute;c của người phụ nữ đang y&ecirc;u đ&atilde; được thể hiện qua b&agrave;i thơ S&oacute;ng.</p>
 <p><img src="https://o.rada.vn/data/image/2021/04/29/bai-tho-song.jpg" alt="S&oacute;ng - T&aacute;c giả: Xu&acirc;n Quỳnh (Nguyễn Thị Xu&acirc;n Quỳnh)"></p>
 <p style="text-align: center;">" Dữ dội v&agrave; dịu &ecirc;m</p>
 <p style="text-align: center;">Ồn &agrave;o v&agrave; lặng lẽ</p>
 <p style="text-align: center;">S&ocirc;ng kh&ocirc;ng hiểu nổi m&igrave;nh</p>
 <p style="text-align: center;">S&oacute;ng t&igrave;m ra tận bể"</p>
 <p>S&oacute;ng biển hay cũng ch&iacute;nh l&agrave; em, người con g&aacute;i đang y&ecirc;u thật qu&aacute; đỗi lạ k&igrave;, s&oacute;ng biển cũng ch&iacute;nh l&agrave; s&oacute;ng l&ograve;ng. Khi y&ecirc;u, bao cảm x&uacute;c cứ tự nhi&ecirc;n d&acirc;ng tr&agrave;o trong tr&aacute;i tim, khi dịu d&agrave;ng, ch&acirc;n t&igrave;nh, &ecirc;m dịu, ru con người sống trong những nỗi nhớ nhung, v&agrave; cũng c&oacute; khi thật dữ dội, m&atilde;nh liệt. Kh&ocirc;ng chỉ c&oacute; thể, tr&aacute;i tim em l&uacute;c n&agrave;y cũng c&oacute; bao nỗi bộn bề cũng c&oacute; l&uacute;c kh&ocirc;ng hiểu nổi ch&iacute;nh m&igrave;nh, nhưng kh&ocirc;ng v&igrave; thế m&agrave; ngừng hy vọng, ngừng kh&aacute;t khao y&ecirc;u, vẫn muốn tự m&igrave;nh rẽ s&oacute;ng để vươn ra biển lớn. Phải chăng, l&uacute;c n&agrave;y đ&acirc;y, em đang cố v&ugrave;ng vẫy khỏi những chật hẹp, lắng lo, &iacute;ch kỉ tầm thường, nhỏ b&eacute; để t&igrave;m tới biển lớn của t&igrave;nh y&ecirc;u, của tiếng n&oacute;i s&acirc;u thẳm nơi tr&aacute;i tim m&igrave;nh:</p>
 <p style="text-align: center;">" S&ocirc;ng kh&ocirc;ng hiểu nổi m&igrave;nh</p>
 <p style="text-align: center;">S&oacute;ng t&igrave;m ra tận bể"</p>
 <p>Đ&oacute; l&agrave; một sự chủ động của người con g&aacute;i trong t&igrave;nh y&ecirc;u hiện đại. Kh&ocirc;ng chờ đợi t&igrave;nh y&ecirc;u đến cũng chẳng chần chừ nghĩ suy ph&acirc;n v&acirc;n m&agrave; tự m&igrave;nh t&igrave;m đến với người m&igrave;nh y&ecirc;u để sống trọn vẹn của cảm x&uacute;c ch&iacute;nh m&igrave;nh.</p>
 <p style="text-align: center;">" &Ocirc;i con s&oacute;ng ng&agrave;y xưa</p>
 <p style="text-align: center;">V&agrave; ng&agrave;y sau vẫn thế</p>
 <p style="text-align: center;">Nỗi kh&aacute;t vọng t&igrave;nh y&ecirc;u</p>
 <p style="text-align: center;">Bồi hồi trống ngực trẻ"</p>
 <p>T&igrave;nh y&ecirc;u m&atilde;i m&atilde;i l&agrave; nỗi kh&aacute;t khao kh&ocirc;ng của ri&ecirc;ng ai, v&agrave; nh&acirc;n vật trữ t&igrave;nh trong b&agrave;i thơ cũng vậy, đau bao năm th&aacute;ng qua đi, dẫu hiện tại hay tương lai c&oacute; ra sao th&igrave; lu&ocirc;n vẫn mong muốn được sống, kh&aacute;t khao vẫy v&ugrave;ng. trong t&igrave;nh y&ecirc;u của m&igrave;nh. Đặc biệt l&agrave; khi c&ograve;n trẻ, khi t&igrave;nh y&ecirc;u trở th&agrave;nh một m&oacute;n gia vị quan trọng trong cuộc sống th&igrave; khi gặp được người thương, con tim lại bồi hồi, xuyến xao lạ thường. T&acirc;m hồn người phụ nữ thật đẹp, thật m&atilde;nh liệt trong t&igrave;nh y&ecirc;u.</p>
 <p style="text-align: center;">" Trước muốn tr&ugrave;ng s&oacute;ng bể</p>
 <p style="text-align: center;">Anh nghĩ về anh ,em</p>
 <p style="text-align: center;">Em nghĩ về biển lớn</p>
 <p style="text-align: center;">Từ nơi n&agrave;o s&oacute;ng l&ecirc;n"</p>
 <p>Giữa biển khơi bao la v&ocirc; tận, giữa d&ograve;ng đời đầy rẫy những nỗi kh&oacute; khăn, lắng lo v&agrave; cả những sự hấp dẫn kh&aacute;c th&igrave; l&ograve;ng em vẫn vững v&agrave;ng, vẫn hướng tr&aacute;i tim m&igrave;nh về anh, về em v&agrave; về t&igrave;nh y&ecirc;u của ch&uacute;ng ta. Dường như chưa mỗi ph&uacute;t gi&acirc;y n&agrave;o l&agrave; kh&ocirc;ng nhớ nhung về "anh" cả. T&acirc;m hồn trong s&aacute;ng của người phụ nữ khi y&ecirc;u thật đẹp đẽ, họ lu&ocirc;n tr&acirc;n trọng người m&igrave;nh y&ecirc;u, lu&ocirc;n d&agrave;nh cho người m&igrave;nh y&ecirc;u những t&igrave;nh cảm tr&acirc;n qu&yacute; v&agrave; thi&ecirc;ng li&ecirc;ng nhất. C&acirc;u thơ "từ nơi n&agrave;o s&oacute;ng l&ecirc;n" như một sự b&acirc;ng khu&acirc;ng trong nỗi niềm khi nghĩ về cội nguồn của t&igrave;nh y&ecirc;u ch&uacute;ng ta, về cội nguồn của t&igrave;nh y&ecirc;u trong cuộc sống. Để rồi, "em" đ&atilde; tự m&igrave;nh nghĩ suy, l&yacute; giải tất cả:</p>
 <p style="text-align: center;">"S&oacute;ng bắt đầu từ gi&oacute;</p>
 <p style="text-align: center;">Gi&oacute; bắt đầu từ đ&acirc;u</p>
 <p style="text-align: center;">Em cũng kh&ocirc;ng biết nữa</p>
 <p style="text-align: center;">Khi n&agrave;o ta y&ecirc;u nhau?"</p>
 <p>Dường như trong đ&aacute;y s&acirc;u t&acirc;m hồn của người phụ nữ khi y&ecirc;u lu&ocirc;n b&ugrave;ng ch&aacute;y những cảm x&uacute;c t&igrave;nh y&ecirc;u tha thiết. L&ograve;ng lu&ocirc;n lu&ocirc;n nghĩ về t&igrave;nh y&ecirc;u, l&yacute; giải nơi bắt đầu s&oacute;ng , gi&oacute; chỉ để mong muốn t&igrave;m được lời giải đ&aacute;p t&igrave;nh y&ecirc;u em d&agrave;nh cho anh, t&igrave;nh y&ecirc;u ch&uacute;ng ta d&agrave;nh cho nhau l&agrave; tự khi n&agrave;o, từ bao giờ? C&acirc;u hỏi tu từ cất l&ecirc;n nghe sao da diết nỗi thương y&ecirc;u đến vậy " Khi n&agrave;o ta y&ecirc;u nhau?".</p>
 <p>C&oacute; nhớ, c&oacute; thương mới gọi l&agrave; y&ecirc;u, c&oacute; ai y&ecirc;u m&agrave; kh&ocirc;ng nhớ, kh&ocirc;ng thương cơ chứ. V&agrave; người phụ nữ trong b&agrave;i thơ cũng kh&ocirc;ng nằm ngo&agrave;i những cảm x&uacute;c tự nhi&ecirc;n ấy, n&agrave;ng nhớ m&atilde;nh liệt, kh&ocirc;n ngu&ocirc;i, nhớ nhiều v&agrave; hạnh ph&uacute;c trong ch&iacute;nh nỗi nhớ nhung ấy:</p>
 <p style="text-align: center;">"Con s&oacute;ng tr&ecirc;n mặt nước</p>
 <p style="text-align: center;">Con s&oacute;ng dưới l&ograve;ng s&acirc;u</p>
 <p style="text-align: center;">&Ocirc;i con s&oacute;ng nhớ bờ</p>
 <p style="text-align: center;">Ng&agrave;y đ&ecirc;m kh&ocirc;ng ngủ được</p>
 <p style="text-align: center;">L&ograve;ng em nhớ đến anh</p>
 <p style="text-align: center;">Cả trong mơ c&ograve;n thức"</p>
 <p>Nỗi nhớ ngập tr&agrave;n cả kh&ocirc;ng gian "dưới l&ograve;ng s&acirc;u","tr&ecirc;n mặt nước" v&agrave; thường trực qua bao thời gian" "ng&agrave;y đ&ecirc;m-kh&ocirc;ng ngủ". C&agrave;ng y&ecirc;u c&agrave;ng nhớ da diết, ng&agrave;y đ&ecirc;m kh&ocirc;ng ngu&ocirc;i nỗi nhớ người thương. Dẫu trong mơ vẫn hướng về anh, trong t&acirc;m tưởng lu&ocirc;n thiết tha b&oacute;ng h&igrave;nh anh. T&igrave;nh y&ecirc;u v&agrave; nỗi nhớ của "em " thật s&acirc;u đậm.</p>
 <p>T&igrave;nh y&ecirc;u điều cần nhất l&agrave; sự thủy chung, l&agrave; l&ograve;ng kh&ocirc;ng đổi dời trước những c&aacute;m dỗ, đam m&ecirc;. Thủy chung trở th&agrave;nh một thước đo chứng minh cho một t&igrave;nh y&ecirc;u bền chặt. Ở đ&acirc;y, t&acirc;m hồn người phụ nữ cũng chứa chan đức t&iacute;nh cao đẹp đ&oacute;, em vẫn lu&ocirc;n thủy chung, son sắt với người thương:</p>
 <p style="text-align: center;">Dẫu xu&ocirc;i về phương Bắc</p>
 <p style="text-align: center;">Dẫu ngược về phương Nam</p>
 <p style="text-align: center;">Nơi n&agrave;o em cũng nghĩ</p>
 <p style="text-align: center;">Hướng về anh - một phương</p>
 <p style="text-align: center;">Ở ngo&agrave;i kia đại dương</p>
 <p style="text-align: center;">Trăm ng&agrave;n con s&oacute;ng đ&oacute;</p>
 <p style="text-align: center;">Con n&agrave;o chẳng tới bờ</p>
 <p style="text-align: center;">Dẫu mu&ocirc;n vời c&aacute;ch trở"</p>
 <p>Dẫu cho bao kh&oacute; khăn, bao c&aacute;ch trở, đau bao khoảng c&aacute;ch th&igrave; l&ograve;ng em vẫn gửi trọn cho anh, vẫn mong ng&oacute;ng v&agrave; đợi cho anh. Tr&aacute;i tim ấy vẫn vẹn nguy&ecirc;n một b&oacute;ng h&igrave;nh, vẫn giữ trọn một t&igrave;nh y&ecirc;u. Nơi đ&aacute;y l&ograve;ng, người con g&aacute;i ấy hiểu được rằng, t&igrave;nh y&ecirc;u chỉ cần l&ograve;ng ch&uacute;ng thủy v&agrave; c&oacute; thời gian th&igrave; rồi một ng&agrave;y sẽ gặp gỡ trong niềm vui, niềm hạnh ph&uacute;c lớn của đ&ocirc;i ta. C&agrave;ng c&aacute;ch trở c&agrave;ng thử th&aacute;ch được t&igrave;nh y&ecirc;u của ch&uacute;ng m&igrave;nh, m&atilde;i m&atilde;i chẳng thể n&agrave;o vơi được.</p>
 <p>Tuy nhi&ecirc;n, đời người th&igrave; hữu hạn m&agrave; t&igrave;nh y&ecirc;u d&agrave;nh cho người th&igrave; v&ocirc; hạn, n&ecirc;n c&oacute; khi nghĩ về cuộc đời lại c&oacute; ch&uacute;t ngậm ng&ugrave;i, x&oacute;t xa:</p>
 <p style="text-align: center;">" Cuộc đời tuy d&agrave;i thế</p>
 <p style="text-align: center;">Năm th&aacute;ng vẫn đi qua</p>
 <p style="text-align: center;">Như biển kia dẫu rộng</p>
 <p style="text-align: center;">M&acirc;y vẫn bay về xa"</p>
 <p>Ai c&oacute; thể cưỡng được những quy luật của tự nhi&ecirc;n, chỉ biết được rằng phải cố gắng thật nhiều để vượt l&ecirc;n thực tại, sống với những kh&aacute;t khao để sống thật &yacute; nghĩa với t&igrave;nh y&ecirc;u lớn lao của m&igrave;nh:</p>
 <p style="text-align: center;">" L&agrave;m sao được tan ra</p>
 <p style="text-align: center;">Th&agrave;nh trăm con s&oacute;ng nhỏ</p>
 <p style="text-align: center;">Giữa biển lớn t&igrave;nh y&ecirc;u</p>
 <p style="text-align: center;">Để ng&agrave;n năm c&ograve;n vỗ."</p>
 <p>Người phụ nữ khao kh&aacute;t được tan ra th&agrave;nh từng con s&oacute;ng nhỏ để l&ecirc;n lỏi v&agrave;o từng ng&otilde; ng&aacute;ch của t&igrave;nh y&ecirc;u trong t&acirc;m hồn rồi tan r&atilde; trong biển lớn.</p>
 <p>T&igrave;nh y&ecirc;u dẫu trăm năm năm cũng vậy, vẫn như những con s&oacute;ng nhỏ lăn tăn kh&ocirc;ng ngững vỗ bờ. C&oacute; thể n&oacute;i S&oacute;ng ch&iacute;nh l&agrave; một bản t&igrave;nh ca đẹp về sự thủy chung, bất tử của t&igrave;nh y&ecirc;u đ&ocirc;i lứa.</p>`,
        featuredImage: 'https://i.ibb.co/QvLvqRg/S-NG-738x554.jpg',
        featured: false,
        view: Math.round(Math.random() * 10000),
        likeCount: Math.round(Math.random() * 1000),
        dislikeCount: Math.round(Math.random() * 100),
        status: 'PUBLISHED',
        createdBy: 1,
        literary: 3,
      },
      {
        postId: 10,
        title: 'Kể lại truyện Tấm Cám bằng lời của nhân vật Tấm',
        slug: 'ke-lai-truyen-tam-cam-bang-loi-cua-nhan-vat-tam',
        summary:
          'Trong kho tàng văn học dân gian có rất nhiều tác phẩm hay, li kì và hấp dẫn; trong đó phải kể đến truyện cổ tích Tấm Cám. Tôi đặc biệt ấn tượng với nhân vật Tấm và nghị lực phi thường của cô. Sau đây để các bạn hình dung thật rõ nét và chân thực về cô gái có số phận hẩm hiu đó, tôi sẽ đặt mình vào nhân vật Tấm để kể lại cuộc đời bấp bênh và vô vàn sóng gió của cô.',
        htmlContent: `<p style="text-align: justify;">Trong kho t&agrave;ng văn học d&acirc;n gian c&oacute; rất nhiều t&aacute;c phẩm hay, li k&igrave; v&agrave; hấp dẫn; trong đ&oacute; phải kể đến truyện cổ t&iacute;ch Tấm C&aacute;m. T&ocirc;i đặc biệt ấn tượng với nh&acirc;n vật Tấm v&agrave; nghị lực phi thường của c&ocirc;. Sau đ&acirc;y để c&aacute;c bạn h&igrave;nh dung thật r&otilde; n&eacute;t v&agrave; ch&acirc;n thực về c&ocirc; g&aacute;i c&oacute; số phận hẩm hiu đ&oacute;, t&ocirc;i sẽ đặt m&igrave;nh v&agrave;o nh&acirc;n vật Tấm để kể lại cuộc đời bấp b&ecirc;nh v&agrave; v&ocirc; v&agrave;n s&oacute;ng gi&oacute; của c&ocirc;.</p>
 <p style="text-align: justify;">Đầu ti&ecirc;n - v&agrave; cũng l&agrave; nỗi bất hạnh lớn nhất, đưa t&ocirc;i v&agrave;o v&ograve;ng xo&aacute;y của sự đau khổ bất hạnh do mẹ con C&aacute;m tạo ra. Năm t&ocirc;i 6 tuổi th&igrave; mẹ mất, bố lấy vợ mới v&agrave; kh&ocirc;ng bao l&acirc;u sau bố t&ocirc;i cũng tr&uacute;ng phong h&agrave;n v&agrave; qua đời. T&ocirc;i phải ở c&ugrave;ng mụ d&igrave; ghẻ v&agrave; con g&aacute;i của mụ l&agrave; C&aacute;m, k&eacute;m t&ocirc;i một tuổi rưỡi. Bản th&acirc;n C&aacute;m kh&ocirc;ng xấu nhưng mụ d&igrave; ghẻ lại rất cay nghiệt, mụ ta bắt t&ocirc;i phải l&agrave;m việc từ s&aacute;ng sớm cho đến tối mịt, ng&agrave;y n&agrave;o cũng như ng&agrave;y n&agrave;o t&ocirc;i phải "dậy sớm hơn g&agrave;, ngủ muộn hơn ch&oacute;" thả sức cho mụ d&igrave; ghẻ đ&aacute;nh đập, h&agrave;nh hạ. C&oacute; một lần mụ d&igrave; ghẻ bảo t&ocirc;i với C&aacute;m đi bắt t&eacute;p, ai bắt được nhiều sẽ được thưởng yếm đỏ. Do t&ocirc;i đ&atilde; quen với c&ocirc;ng việc đồng &aacute;ng n&ecirc;n chỉ cần khoắng khoắng mấy c&aacute;i l&agrave; đ&atilde; đầy giỏ. C&ograve;n C&aacute;m thi cứ đủng đỉnh v&agrave; chưa bắt được con n&agrave;o, đến chiều tối t&ocirc;i v&agrave; C&aacute;m đi về. T&ocirc;i liếc nh&igrave;n thấy giỏ của C&aacute;m c&oacute; rất &iacute;t thế n&ecirc;n rất sướng, cười thầm l&agrave;" chắc chắn phen n&agrave;y yếm đỏ sẽ thuộc về ta". C&aacute;m thấy giỏ của t&ocirc;i đầy ắp n&ecirc;n cũng hoảng hoảng b&egrave;n bảo t&ocirc;i gội đầu để kẻo bị d&igrave; ghẻ mắng, t&ocirc;i tin ngay. L&uacute;c l&ecirc;n th&igrave; đ&atilde; thấy C&aacute;m tr&uacute;t hết t&eacute;p v&agrave;o giỏ của n&oacute; rồi chạy về, thấy thế t&ocirc;i bật kh&oacute;c v&agrave; kh&ocirc;ng thể tin C&aacute;m lại đ&ecirc; tiện bỉ ổi như vậy. Chợt c&oacute; một luồng kh&oacute;i m&agrave;u trắng thoảng qua v&agrave; Bụt hiện ra v&agrave; bảo t&ocirc;i con c&aacute; nhỏ nhỏ trong giỏ l&agrave; c&aacute; bống v&agrave; dặn về chăn cho bống ăn uống đ&agrave;ng ho&agrave;ng tử tế.</p>
 <p style="text-align: justify;">C&oacute; một lần d&igrave; ghẻ lừa t&ocirc;i đi chăn tr&acirc;u ở xa rồi giết thịt bống, t&ocirc;i đau x&oacute;t khi thấy bống chết v&agrave; đem ch&ocirc;n xương bống xuống dưới ch&acirc;n giường. Mấy th&aacute;ng sau nh&agrave; vua mở hội, t&ocirc;i lấy quần &aacute;o gi&agrave;y d&eacute;p v&agrave; xe cộ ra từ c&aacute;c lọ ở ch&acirc;n giường, sau hội t&ocirc;i thử gi&agrave;y th&agrave;nh c&ocirc;ng v&agrave; được vua đưa v&agrave;o cung l&agrave;m ho&agrave;ng hậu. Tuy đ&atilde; gi&agrave;u sang ph&uacute; qu&yacute; dưới một người tr&ecirc;n triệu người nhưng t&ocirc;i vẫn kh&ocirc;ng qu&ecirc;n ng&agrave;y giỗ cha v&agrave; về nh&agrave; th&igrave; bị mụ d&igrave; ghẻ th&iacute;ch s&aacute;t v&agrave; đưa C&aacute;m v&agrave;o cung. X&aacute;c của t&ocirc;i ho&aacute; th&agrave;nh chim v&agrave;ng anh bay v&agrave;o cung nhưng bị mụ d&igrave; ghẻ v&agrave; C&aacute;m giết thịt v&agrave; vứt l&ocirc;ng chim ra ngo&agrave;i vườn. Từ đống l&ocirc;ng chim đ&oacute; t&ocirc;i lại ho&aacute; th&acirc;n l&agrave;m c&acirc;y xoan đ&agrave;o rồi bị C&aacute;m chặt c&acirc;y l&agrave;m khung cửi th&igrave; t&ocirc;i chửi v&agrave; hăm dọa m&oacute;c mắt C&aacute;m n&ecirc;n bị mẹ con mụ d&igrave; ghẻ đốt đi, đổ tro đi thật xa. T&ocirc;i lại ho&aacute; th&acirc;n l&agrave;m c&acirc;y thị, c&acirc;y thị của t&ocirc;i chỉ c&oacute; một quả, một h&ocirc;m c&oacute; một b&agrave; l&atilde;o đến xin quả thị, biết l&agrave; người tốt n&ecirc;n t&ocirc;i nhằm chuẩn chuẩn rơi đ&uacute;ng v&agrave;o bị của b&agrave; l&atilde;o. Ng&agrave;y ng&agrave;y chờ b&agrave; l&atilde;o đi chợ t&ocirc;i mới bước ra từ vỏ thị để l&agrave;m việc nh&agrave; gi&uacute;p b&agrave; l&atilde;o, tuy l&agrave;m việc như osin nhưng t&ocirc;i rất vui v&igrave; được gi&uacute;p b&agrave; l&atilde;o. Sau đ&oacute; c&oacute; một h&ocirc;m b&agrave; l&atilde;o quay lại giữa chừng x&eacute; vỏ thị v&agrave; kh&ocirc;ng cho t&ocirc;i chui v&agrave;o nữa, t&ocirc;i gi&uacute;p b&agrave; cụ t&ecirc;m trầu b&aacute;n h&agrave;ng nước.</p>
 <p style="text-align: justify;">V&agrave; cuối c&ugrave;ng c&aacute;i ng&agrave;y đ&oacute; đ&atilde; đến - c&aacute;i ng&agrave;y định mệnh k&eacute;o t&ocirc;i ra khỏi v&ograve;ng xo&aacute;y khổ hạnh - nh&agrave; vua đi chơi đến ăn trầu ở qu&aacute;n b&agrave; l&atilde;o, thấy trầu t&ecirc;m đẹp qu&aacute; n&ecirc;n vua đ&ograve;i gặp t&ocirc;i, phu th&ecirc; tr&ugrave;ng ph&ugrave;ng thật l&agrave; cảm động. Sau đ&oacute; t&ocirc;i từ gi&atilde; b&agrave; l&atilde;o rồi trở về c&ugrave;ng. Qua những việc l&agrave;m xấu xa của mẹ con C&aacute;m cho thấy ch&uacute;ng l&agrave; những kẻ xấu cần phải xo&aacute; bỏ trong nh&acirc;n gian, t&ocirc;i xui C&aacute;m xuống hố rồi đổ nước s&ocirc;i cho n&oacute; chết sau đ&oacute; l&agrave;m nước mắm cho d&igrave; ghẻ ăn sau đ&oacute; d&igrave; ghẻ biết v&agrave; lăn đ&ugrave;ng ra chết.</p>
 <p style="text-align: justify;">Cuối c&ugrave;ng t&ocirc;i ở lại sống cuộc sống hạnh ph&uacute;c b&ecirc;n vua v&agrave; vương quốc của m&igrave;nh.</p>`,
        featuredImage:
          'https://cdn.tgdd.vn/Files/2022/08/12/1455650/loi-ke-va-y-nghia-cua-cau-truyen-co-tich-noi-tieng-tam-cam-202208120839487685.jpg',
        featured: false,
        view: Math.round(Math.random() * 10000),
        likeCount: Math.round(Math.random() * 1000),
        dislikeCount: Math.round(Math.random() * 100),
        status: 'PUBLISHED',
        createdBy: 1,
        literary: 1,
      },
      {
        postId: 11,
        title:
          'Phân tích nỗi nhớ da diết của tác giả với đồng đội với chiến khu trong bài thơ Tây Tiến',
        slug: 'phan-tich-noi-nho-da-diet-cua-tac-gia-voi-dong-doi-voi-chien-khu-trong-bai-tho-tay-tien',
        summary:
          'Hơn sáu mươi năm đã trôi qua kể từ ngày bài thơ Tây Tiến của Quang Dũng ra mắt bạn đọc. Sáu mươi năm! Thời gian dài đủ để nước chảy đá mòn, đủ để tóc xanh ngả muối tiêu, đủ để ta quên đi một con người, một tác phẩm văn học.',
        htmlContent: `<p dir="ltr">Hơn s&aacute;u mươi năm đ&atilde; tr&ocirc;i qua kể từ ng&agrave;y b&agrave;i thơ T&acirc;y Tiến của Quang Dũng ra mắt bạn đọc. S&aacute;u mươi năm! Thời gian d&agrave;i đủ để nước chảy đ&aacute; m&ograve;n, đủ để t&oacute;c xanh ngả muối ti&ecirc;u, đủ để ta qu&ecirc;n đi một con người, một t&aacute;c phẩm văn học. Nhưng với &ldquo;T&acirc;y Tiến&rdquo; th&igrave; kh&ocirc;ng, b&agrave;i thơ vẫn vượt qua trở ngại của thời gian, vượt qua dư luận để ng&agrave;y c&agrave;ng tỏa s&aacute;ng trong l&ograve;ng những người y&ecirc;u thơ Việt Nam. Đọc &ldquo;T&acirc;y Tiến&rdquo;, người ta cảm nhận được vẻ đẹp h&agrave;o h&ugrave;ng, oai h&ugrave;ng, sự hy sinh bi tr&aacute;ng của người l&iacute;nh T&acirc;y Tiến v&agrave; vẻ đẹp h&ugrave;ng vĩ, thơ mộng của thi&ecirc;n nhi&ecirc;n miền T&acirc;y&hellip; Tất cả những vẻ đẹp ấy, h&ograve;a c&ugrave;ng nỗi nhớ của chất trữ t&igrave;nh. Bằng ng&ograve;i b&uacute;t l&atilde;ng mạn v&agrave; t&agrave;i hoa, Quang Dũng đ&atilde; tạo n&ecirc;n nỗi nhớ một c&aacute;ch s&acirc;u lắng v&agrave; x&uacute;c động:</p>
 <p dir="ltr" style="text-align: center;">&ldquo;S&ocirc;ng M&atilde; xa rồi T&acirc;y Tiến ơi!</p>
 <p style="text-align: center;"><strong>&nbsp;</strong>&hellip;</p>
 <p dir="ltr" style="text-align: center;">Mai Ch&acirc;u m&ugrave;a em thơm nếp x&ocirc;i&rdquo;</p>
 <p dir="ltr">Đoạn thơ được đặt ở đầu b&agrave;i thơ thể hiện s&acirc;u sắc t&acirc;m trạng của t&aacute;c giả khi nhớ về mảnh đất T&acirc;y Bắc v&agrave; đồng đội của m&igrave;nh.</p>
 <p dir="ltr">T&acirc;y Tiến l&agrave; một chi bộ qu&acirc;n đội được th&agrave;nh lập đầu năm 1947, gồm phần lớn l&agrave; thanh ni&ecirc;n tr&iacute; thức H&agrave; Nội. Nhiệm vụ của họ l&agrave; phối hợp với qu&acirc;n đội L&agrave;o để bảo vệ bi&ecirc;n giới ph&iacute;a T&acirc;y. Năm 1948, T&acirc;y Tiến giải t&aacute;n lập trung đo&agrave;n 52, Quang Dũng cũng đi đơn vị kh&aacute;c. Ngay sau khi rời đơn vị cũ, Quang Dũng đ&atilde; s&aacute;ng t&aacute;c b&agrave;i thơ n&agrave;y.</p>
 <p dir="ltr">Nỗi nhớ về T&acirc;y Bắc v&agrave; những người đồng đội được thể hiện trong chất trữ t&igrave;nh ở hai c&acirc;u thơ đầu:</p>
 <p dir="ltr" style="text-align: center;">&ldquo;S&ocirc;ng M&atilde; xa rồi T&acirc;y Tiến ơi!</p>
 <p dir="ltr" style="text-align: center;">Nhớ về rừng n&uacute;i nhớ chơi vơi&rdquo;</p>
 <p dir="ltr">D&ograve;ng s&ocirc;ng l&agrave; một t&iacute;n hiệu nghệ thuật rất hay trong văn học, tượng trưng cho sự lưu giữ những kỉ niệm kh&oacute; qu&ecirc;n. B&agrave;i thơ viết về T&acirc;y Tiến, nhưng được mở đầu bằng h&igrave;nh ảnh s&ocirc;ng M&atilde;. Đ&oacute; l&agrave; d&ograve;ng s&ocirc;ng chảy dọc miền T&acirc;y Bắc, địa b&agrave;n hoạt động của những người l&iacute;nh T&acirc;y Tiến. S&ocirc;ng M&atilde; đ&atilde; trở th&agrave;nh chứng nh&acirc;n của lịch sử, người bạn lớn chia sẻ buồn vui&nbsp; v&agrave; hơn thế nữa, d&ograve;ng s&ocirc;ng đ&atilde; bao lần tiễn đưa những người l&iacute;nh trở về qu&ecirc; hương th&acirc;n y&ecirc;u. N&oacute; đ&atilde; trở th&agrave;nh d&ograve;ng s&ocirc;ng cảm x&uacute;c chở đầy tr&aacute;i tim con người.</p>
 <div class="text-center ads-tags">&nbsp;</div>
 <p dir="ltr">H&igrave;nh ảnh s&ocirc;ng M&atilde; xuất hiện c&ugrave;ng T&acirc;y Tiến v&agrave; được đặt ở giữa &ldquo;xa rồi&rdquo; vừa c&oacute; &yacute; nghĩa với cả T&acirc;y Tiến v&agrave; s&ocirc;ng M&atilde;, v&igrave; &ldquo;xa&rdquo; n&ecirc;n ở trong l&ograve;ng nh&acirc;n vật trữ t&igrave;nh gợi l&ecirc;n nỗi nhớ. Sự đồng h&agrave;nh của s&ocirc;ng M&atilde; với T&acirc;y Tiến đ&atilde; bộc lộ một khu&ocirc;n mẫu: nỗi nhớ thi&ecirc;n nhi&ecirc;n (T&acirc;y Bắc) bao giờ cũng gắn liền với nỗi nhớ&nbsp; đồng đội. Điệp ngữ &ldquo;nhớ&rdquo; ở đầu mỗi c&acirc;u trong c&acirc;u thơ thứ hai được điệp lại bằng từ &ldquo;chơi với&rdquo; tạo n&ecirc;n sự đối lập đầy ấn tượng. Nhớ &ldquo;chơi vơi&rdquo; l&agrave; nỗi nhớ da diết, một nỗi nhớ kh&oacute; tả, bởi n&oacute; bộc lộ nhiều nỗi niềm. &Acirc;m &ldquo;ơi&rdquo; l&agrave; &acirc;m mở, c&oacute; &acirc;m vang d&agrave;i lan tỏa. Tiếng &ldquo;ơi&rdquo; mở đầu ở c&acirc;u thứ nhất k&eacute;o d&agrave;i sang c&acirc;u thứ hai như một tiếng gọi cất l&ecirc;n từ&nbsp; v&aacute;ch đ&aacute; của n&uacute;i rừng T&acirc;y Bắc, ng&acirc;n vang từ nỗi nhớ của một b&oacute;ng h&igrave;nh trữ t&igrave;nh ng&agrave;n năm.</p>
 <p dir="ltr">Nỗi nhớ trải khắp n&uacute;i rừng bao la v&agrave; bủa v&acirc;y l&ograve;ng người. C&acirc;u thơ ng&acirc;m tưởng như nhẹ nh&agrave;ng, nhưng lại bồng bềnh, k&eacute;o d&agrave;i, lan tỏa trong thời gian v&agrave; kh&ocirc;ng gian,&nbsp; như nhấc nh&acirc;n vật trữ t&igrave;nh ra khỏi thực tại, đọng lại trong nỗi nhớ triền mi&ecirc;n, v&ocirc; tận. Nỗi nhớ n&agrave;y vẫn thao thức qua những địa danh quen thuộc: S&agrave;i Khao, Mường L&aacute;t, Pha Lu&ocirc;ng. Đ&acirc;y kh&ocirc;ng phải l&agrave; những c&aacute;i t&ecirc;n v&ocirc; hồn m&agrave; ch&uacute;ng gắn b&oacute; với nh&agrave; văn. N&oacute; gợi nhớ đến những v&ugrave;ng hoang vu xa x&ocirc;i ở T&acirc;y Bắc, một miền đất xa x&ocirc;i &ndash; nơi những người l&iacute;nh T&acirc;y Tiến bước đi trong sương m&ugrave;, mịt m&ugrave;. Nỗi nhớ cũng tạo n&ecirc;n những kỉ niệm cho bức tranh T&acirc;y Bắc khắc nghiệt m&agrave; h&ugrave;ng vĩ để t&ocirc;n vinh ch&acirc;n dung người l&iacute;nh T&acirc;y Tiến:</p>
 <p dir="ltr" style="text-align: center;">&ldquo;Dốc l&ecirc;n kh&uacute;c khuỷu dốc thăm thẳm</p>
 <p dir="ltr" style="text-align: center;">Heo h&uacute;t cồn m&acirc;y s&uacute;ng ngửi trời</p>
 <p dir="ltr" style="text-align: center;">Ng&agrave;n thước l&ecirc;n cao, ng&agrave;n thước xuống</p>
 <p dir="ltr" style="text-align: center;">Nh&agrave; ai Pha Lu&ocirc;ng mưa xa khơi&rdquo;</p>
 <p dir="ltr">C&aacute;i h&ugrave;ng vĩ của cảnh vật được t&ocirc; đậm th&ecirc;m ở những h&igrave;nh ảnh mi&ecirc;u tả đầy ấn tượng. C&acirc;u thơ &ldquo;Dốc l&ecirc;n kh&uacute;c khuỷu dốc thăm thẳm&rdquo; sử dụng những vần trắc li&ecirc;n tiếp nhau như con đường gập ghềnh, thăng trầm trong chiến tranh của người l&iacute;nh. Đường h&agrave;nh qu&acirc;n nhọc nhằn như đường l&ecirc;n trời, thi&ecirc;n nhi&ecirc;n c&ugrave;ng con người đ&atilde; tạo n&ecirc;n h&igrave;nh ảnh th&uacute; vị &ldquo;s&uacute;ng ngửi trời&rdquo;. Mũi s&uacute;ng của người chiến sĩ được nh&acirc;n h&oacute;a tạo n&ecirc;n h&igrave;nh tượng người l&iacute;nh vừa tinh nghịch, vừa thơ mộng. N&oacute; củng cố &yacute; ch&iacute;, quyết t&acirc;m của người l&iacute;nh. Ch&iacute;nh v&igrave; phẩm chất qu&acirc;n nh&acirc;n trẻ trung ấy m&agrave; họ kh&ocirc;ng phai nhạt m&agrave; vươn l&ecirc;n như những chiến sĩ. L&uacute;c n&agrave;y, thi&ecirc;n nhi&ecirc;n kh&ocirc;ng c&ograve;n l&agrave; đối tượng để ngắm nh&igrave;n nữa m&agrave; l&agrave; đối thủ ng&agrave;m thước l&ecirc;n cao, ng&agrave;n thước xuống&rdquo;.</p>
 <p dir="ltr">Bốn c&acirc;u thơ l&agrave; sự kết hợp tuyệt vời giữa vần v&agrave; nội dung. Thay đổi linh hoạt như một cuộc diễu h&agrave;nh vất vả l&ecirc;n xuống nhanh ch&oacute;ng. C&oacute; những l&uacute;c t&acirc;m hồn con người ch&igrave;m đắm trong những khoảnh khắc đẹp đẽ &ldquo;nh&agrave; ai Pha Lu&ocirc;ng mưa xa khơi&rdquo;. Đứng từ tr&ecirc;n n&uacute;i cao nh&igrave;n xuống, giữa bao la rộng lớn, trong khi cơn mưa xa khiến mọi thứ vừa hư vừa thực, th&igrave; &ldquo;nh&agrave; ai&rdquo; gieo v&agrave;o l&ograve;ng người l&iacute;nh c&oacute; lẽ kh&ocirc;ng phải l&agrave; sự băn khoăn m&agrave; l&agrave; niềm thương nhớ. Bức tranh thi&ecirc;n nhi&ecirc;n được nh&igrave;n từ nhiều g&oacute;c độ, v&agrave; mỗi g&oacute;c nh&igrave;n lại c&oacute; một ấn tượng kh&aacute;c nhau về vẻ đẹp. Đi theo d&ograve;ng ho&agrave;i niệm của nh&agrave; thơ, dường như người đọc cũng tham dự v&agrave;o những hồi ức về những thử th&aacute;ch của d&acirc;n tộc v&agrave; c&ugrave;ng chung vui với họ.</p>
 <p dir="ltr">Trong bốn c&acirc;u thơ sau, nh&agrave; thơ thể hiện sự hy sinh bi tr&aacute;ng của người chiến sĩ trong cuộc h&agrave;nh tr&igrave;nh đầy ch&ocirc;ng gai, kh&oacute; khăn, nguy hiểm.</p>
 <p dir="ltr" style="text-align: center;">&ldquo;Anh bạn d&atilde;i dầu kh&ocirc;ng bước nữa</p>
 <p dir="ltr" style="text-align: center;">Gục l&ecirc;n s&uacute;ng mũ bỏ qu&ecirc;n đời</p>
 <p dir="ltr" style="text-align: center;">Chiều chiều oai linh th&aacute;c gầm th&eacute;t</p>
 <p dir="ltr" style="text-align: center;">Đ&ecirc;m đ&ecirc;m Mường Hịch cọp tr&ecirc;u người&rdquo;</p>
 <p dir="ltr">Trong cuộc h&agrave;nh qu&acirc;n gian khổ ấy, c&oacute; những người l&iacute;nh T&acirc;y Tiến đ&atilde; ng&atilde; quỵ v&igrave; kiệt sức. C&aacute;ch&nbsp;<a href="https://luatduonggia.vn/noi-giam-noi-tranh-la-gi-co-tac-dung-gi-su-dung-the-nao/">n&oacute;i giảm n&oacute;i tr&aacute;nh</a>&nbsp;trước c&aacute;i chết, vừa x&oacute;t xa vừa ngạo nghễ, như thể đ&oacute;n nhận c&aacute;i chết một c&aacute;ch thản nhi&ecirc;n, v&ocirc; tư, khi c&aacute;i chết được coi nhẹ như l&ocirc;ng hồng. Để tăng th&ecirc;m sự bi tr&aacute;ng cho sự hi sinh, Quang Dũng đ&atilde; t&ocirc; điểm th&ecirc;m cho khung cảnh thi&ecirc;n nhi&ecirc;n những &acirc;m thanh h&atilde;i h&ugrave;ng. Tất nhi&ecirc;n l&agrave; c&oacute; nguy hiểm, c&oacute; nguy hiểm đến t&iacute;nh mạng nhưng trong mắt những ch&agrave;ng tr&aacute;i&nbsp; dũng cảm kh&ocirc;ng k&eacute;m phần tinh nghịch, đ&oacute; chỉ l&agrave; &ldquo;gầm th&eacute;t&rdquo;, &ldquo;tr&ecirc;u người&rdquo; m&agrave; th&ocirc;i.</p>
 <p dir="ltr">B&ecirc;n cạnh h&igrave;nh ảnh thi&ecirc;n nhi&ecirc;n T&acirc;y Bắc, cuộc sống của người d&acirc;n nơi đ&acirc;y c&oacute; thể bắt gặp trong một số h&igrave;nh ảnh tuy tho&aacute;ng qua nhưng rất gợi h&igrave;nh.</p>
 <p dir="ltr" style="text-align: center;">&ldquo;Nhớ &ocirc;i T&acirc;y Tiến cơm l&ecirc;n kh&oacute;i</p>
 <p dir="ltr" style="text-align: center;">Mai Ch&acirc;u m&ugrave;a em thơm nếp x&ocirc;i&rdquo;</p>
 <p dir="ltr">C&aacute;c chi tiết &ldquo;cơm l&ecirc;n kh&oacute;i&rdquo;, &ldquo;Thơm nếp x&ocirc;i&rdquo; l&agrave; những h&igrave;nh ảnh gần gũi, quen thuộc gợi h&igrave;nh ảnh gia đ&igrave;nh đầm ấm, hạnh ph&uacute;c. Đứng đầu d&ograve;ng thơ nhẹ nh&agrave;ng bay bổng l&agrave; &ldquo;Mai Ch&acirc;u&rdquo;, nơi hương thơm gợi nhớ đất l&agrave;nh. Nỗi nhớ của nh&acirc;n vật trữ t&igrave;nh mộng h&ugrave;ng vĩ, người l&iacute;nh T&acirc;y Tiến lạc quan giữa n&uacute;i rừng khắc nghiệt m&agrave; c&ograve;n ở t&igrave;nh cảm nồng hậu với đồng b&agrave;o T&acirc;y Bắc.</p>
 <p dir="ltr">Đo&agrave;n binh T&acirc;y Tiến nay đ&atilde; &ldquo;xa x&ocirc;i&rdquo; nhưng c&oacute; bao giờ qu&ecirc;n rằng bữa x&ocirc;i đầu c&ograve;n tỏa nhớ m&ugrave;i hương ấy. Hai chữ &ldquo;m&ugrave;a em&rdquo; l&agrave; một s&aacute;ng tạo độc đ&aacute;o của ng&ocirc;n ngữ thơ. &ldquo;M&ugrave;a em&rdquo; l&agrave; m&ugrave;a của những c&ocirc; g&aacute;i trẻ với vẻ đẹp e ấp, duy&ecirc;n d&aacute;ng, để lại trong l&ograve;ng người l&iacute;nh trẻ bao nhi&ecirc;u y&ecirc;u thương, nhớ nhung. C&oacute; lẽ v&igrave; thế m&agrave; lời thơ trở n&ecirc;n uyển chuyển mềm mại, lời thơ t&igrave;nh trở n&ecirc;n ấm &aacute;p hạnh ph&uacute;c. Mọi kh&oacute; khăn dường như bị gạt bỏ, thay v&agrave;o đ&oacute; l&agrave; sự lạc quan v&agrave; tr&agrave;n ngập y&ecirc;u thương.</p>
 <p dir="ltr">Đoạn thơ để lại dấu ấn đẹp trong thơ ca kh&aacute;ng chiến, th&agrave;nh c&ocirc;ng của t&aacute;c phẩm ch&iacute;nh l&agrave; sự kết hợp h&agrave;i h&ograve;a giữa khuynh hướng sử thi kết hợp với cảm hứng l&atilde;ng mạn. Th&ecirc;m v&agrave;o đ&oacute; l&agrave; c&aacute;c yếu tố nghệ thuật như việc sử dụng nhiều từ tượng h&igrave;nh, tượng thanh, điệp ngữ, nh&acirc;n h&oacute;a, tương phản&hellip; tất cả đ&atilde; tạo n&ecirc;n một đoạn thơ hay v&agrave; c&oacute; gi&aacute; trị.</p>`,
        featuredImage: 'https://i.ibb.co/Jts7Rz2/e9f9-boi-doi-tay-tien.jpg',
        featured: false,
        view: Math.round(Math.random() * 10000),
        likeCount: Math.round(Math.random() * 1000),
        dislikeCount: Math.round(Math.random() * 100),
        status: 'PUBLISHED',
        createdBy: 1,
        literary: 2,
      },
    ],
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
        title: 'Trắc nghiệm tính cách MBTI',
        description:
          'Dẫn dắt bởi chuyên gia hàng đầu, trải nghiệm trắc nghiệm MBTI sẽ giúp bạn hiểu rõ hơn về mình và mở ra cơ hội phát triển cá nhân không giới hạn. Bắt đầu cuộc hành trình khám phá bản thân ngay hôm nay!',
        image:
          'https://i.ibb.co/PQs9v4q/Bright-Purple-White-Black-Illustrative-Leaderboard-Ad.jpg',
        displayPosition: ad_display_position.HOME,
        target: 'https://www.16personalities.com/free-personality-test',
        startDate: new Date(),
        endDate: new Date(new Date().getTime() + 60 * 60 * 24 * 15 * 1000), //15 days
        impressionCount: 1523,
        clickCount: 231,
        price: Math.random().toFixed(3),
        visibility: false,
        createdBy: 1,
      },
      {
        advertisementId: 2,
        title: 'Học bổng Anh Quốc',
        description: 'Học bổng Anh trọn gói, thi đánh giá năng lực',
        image:
          'https://i.ibb.co/MRP4wH4/Blue-Modern-Time-To-Travel-Mobile-Banner.jpg',
        displayPosition: ad_display_position.SEARCH,
        target: 'hhttps://duhocnamphong.vn/hoc-bong-du-hoc-anh-ct15.html',
        startDate: new Date(new Date().getTime() + 60 * 60 * 24 * 15 * 1000),
        endDate: new Date(new Date().getTime() + 60 * 60 * 24 * 15 * 1000),
        impressionCount: 263,
        clickCount: 12,
        visibility: false,
        price: Math.random().toFixed(3),
        createdBy: 1,
      },
      {
        advertisementId: 3,
        title: 'Trại hè 2023',
        description:
          'Trại Hè 2023: Kỳ nghỉ đáng nhớ cho sự phát triển và kỷ niệm vui vẻ!',
        image:
          'https://i.ibb.co/G2k15VZ/Dark-Green-Ash-Grey-Playful-Type-Billboard.jpg',
        displayPosition: ad_display_position.READ,
        target: 'https://duhocnamphong.vn/hoc-bong-du-hoc-anh-ct15.html',
        startDate: new Date(new Date().getTime() + 60 * 60 * 24 * 15 * 1000),
        endDate: new Date(new Date().getTime() + 60 * 60 * 24 * 15 * 1000),
        impressionCount: 743,
        clickCount: 324,
        visibility: false,
        price: Math.random().toFixed(3),
        createdBy: 1,
      },
      {
        advertisementId: 4,
        title: 'Trắc nghiệm Online',
        description:
          'Thi Online Chất Lượng: Động Não, Đánh Bại Giới Hạn với Dịch Vụ Uy Tín',
        image:
          'https://i.ibb.co/qn7C51W/Pastel-Blue-Abstract-Modern-Online-Courses-Billboard-Web-Ad.jpg',
        displayPosition: ad_display_position.LITERARY,
        target: 'https://duhocnamphong.vn/hoc-bong-du-hoc-anh-ct15.html',
        startDate: new Date(new Date().getTime() + 60 * 60 * 24 * 15 * 1000),
        endDate: new Date(new Date().getTime() + 60 * 60 * 24 * 15 * 1000),
        impressionCount: 527,
        clickCount: 82,
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
