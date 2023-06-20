import post from '@/models/post'
import post_category from '@/models/post_category'
import category from '../../../models/category'

async function getNews(req, res) {
    try {
        const news = [
            {
                title: 'Đề xuất dành 1 triệu tỷ đọng trong nhà băng hỗ trợ người mất việc',
                subTitle:
                    'Trưởng ban Ban đổi mới quản lý doanh nghiệp TP HCM Trần Anh Tuấn đề xuất dành 1 triệu tỷ đồng ngân quỹ đang gửi ngân hàng để hỗ trợ người lao động.',
                publisher: '6476f31ce125802070155729',
                image: 'https://vcdn1-kinhdoanh.vnecdn.net/2023/05/31/trananhtuan-1685513854-1685513-9476-7707-1685514580.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=IpzYHc94i8qwZ_b8-Z5x9A',
                displayType: 'HOT',
            },
            {
                title: 'Tông xe liên hoàn, cao tốc TP HCM - Long Thành ùn tắc 5 km',
                subTitle:
                    'Dòng xe chạy trên cao tốc TP HCM - Long Thành - Dầu Giây tông liên hoàn, gây kẹt xe khoảng 5 km, sáng 31/5. ',
                publisher: '6476f31ce125802070155729',
                image: 'https://vcdn1-vnexpress.vnecdn.net/2023/05/31/cd6a1cad353feb61b22e-1-7447-16-3460-4338-1685504537.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=g1vCEJlpQoOf05Ao8W15AA',
                displayType: 'HOT',
            },
            {
                title: 'Hoa hậu Thùy Tiên thắng kiện',
                subTitle:
                    'TP HCMToà cho rằng bà Đặng Thùy Trang kiện hoa hậu Thùy Tiên đòi 2,4 tỷ đồng tiền nợ và bồi thường danh dự là không có căn cứ, nên không chấp nhận.',
                publisher: '6476f31ce125802070155729',
                image: 'https://vcdn1-vnexpress.vnecdn.net/2023/05/31/thuy-tien1-4195-1685516566-168-7439-8008-1685518062.png?w=220&h=132&q=100&dpr=1&fit=crop&s=2LMEpGHMZlWQ-3xTXBWJng',
                displayType: 'HOT',
            },
            {
                title: "Trump muốn xóa luật 'sinh ở Mỹ là mang quốc tịch Mỹ'",
                subTitle:
                    'Cựu tổng thống Mỹ Trump tuyên bố sẽ xóa quyền công dân theo nơi sinh ngay trong ngày đầu ông nhậm chức nếu tái đắc cử vào năm 2024.',
                publisher: '6476f31ce125802070155729',
                image: 'https://vcdn1-vnexpress.vnecdn.net/2023/05/31/33DZ3JAhighres-1685515542-6012-1685515569.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=tTjgrFAgFf0-Ry8YmCA-FQ',
                displayType: 'TOP',
            },
            {
                title: 'Chiến thuật giúp ông Erdogan nắm quyền sang thập kỷ thứ ba',
                subTitle:
                    'Tổng thống Erdogan thực hiện chính sách dân túy và đường lối đối ngoại độc lập để tái đắc cử, dù có thể khiến quan hệ với phương Tây thêm căng thẳng.',
                publisher: '6476f31ce125802070155729',
                image: 'https://vcdn1-vnexpress.vnecdn.net/2023/05/29/erodgan-1685349646-1685349741-9108-1685350369.png?w=300&h=180&q=100&dpr=1&fit=crop&s=LRXytSmKkgBEkcBtY-o_1g',
                displayType: 'TOP',
            },
            {
                title: 'Quản lý Zalo, Telegram để đảm bảo quyền lợi người dùng',
                subTitle:
                    'Bộ Thông tin và Truyền thông cho biết việc sửa đổi Luật Viễn thông, trong đó có OTT viễn thông, nhằm đảm bảo an toàn, an ninh mạng và quyền lợi người dùng.',
                publisher: '6476f31ce125802070155729',
                image: 'https://vcdn1-vnexpress.vnecdn.net/2023/06/02/1a874784732fad71f43e-168567410-3379-5468-1685674603.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=-vgFHZ0ehOU_D13GyBMXwg',
                displayType: 'HOT',
            },
            {
                title: 'Ông trùm trực thăng Malaysia',
                subTitle:
                    'Từ một chiếc trực thăng mua với giá 1,5 triệu USD để dùng, Ibrahim bén duyên ngành cho thuê trực thăng và chiếm thị phần số 2 châu Á. ',
                publisher: '6476f31ce125802070155729',
                image: 'https://vcdn1-kinhdoanh.vnecdn.net/2023/06/01/truc-thang-2-1685604029-9882-1685604193.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=ERulq5D1bO42MYkmZMminQ',
                displayType: 'NORMAL',
            },
            {
                title: 'Chọn mái Nhật hay Thái để hợp thời tiết miền Bắc',
                subTitle:
                    'Tôi xây nhà ở ngoại thành Hà Nội và đang phân vân nên làm mái kiểu Nhật hay Thái. Xin tư vấn giúp tôi phương án.',
                publisher: '6476f31ce125802070155729',
                image: 'https://vcdn1-vnexpress.vnecdn.net/2023/06/01/341154692-246673521072572-4805-8901-6317-1685604825.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=NcrMvSP49towWQ6pSobLBQ',
                displayType: 'NORMAL',
            },
            {
                title: 'Nhiệt Ba bị chê "quá đẹp" để đóng công tố viên',
                subTitle:
                    'Mỹ nữ Tân Cương Địch Lệ Nhiệt Ba bị khán giả nhận xét gương mặt quá đẹp, không hợp đóng "Công tố tinh anh". ',
                publisher: '6476f31ce125802070155729',
                image: 'https://vcdn1-giaitri.vnecdn.net/2023/06/02/topnhietba-1685672272-9503-1685672438.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=beHqG3X0TWT7tCI4w5racg',
                displayType: 'NORMAL',
            },
            {
                title: 'Đi viện trong cái nóng 40 độ',
                subTitle:
                    'Anh Sơn, 38 tuổi, một tay bế con gái đang ngủ, một tay phe phẩy quạt giấy, mồ hôi đầm đìa, ngồi chờ trước cửa khoa Cấp cứu, Bệnh ... ',
                publisher: '6476f31ce125802070155729',
                image: 'https://vcdn1-suckhoe.vnecdn.net/2023/06/02/nang-nong-bv1-5000-1685683345-7415-4575-1685686413.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=tE0qANN0_fadK0OmlIwGBg',
                displayType: 'NORMAL',
            },
        ]
        let categories = await category.find()

        categories = categories.map((item) => item._id)
        news.forEach(async (e, i) => {
            setTimeout(async () => {
                const newPost = new post({
                    ...e,
                    content: `<p class="description">Bộ Th&ocirc;ng tin v&agrave; Truyền th&ocirc;ng cho biết việc sửa đổi Luật Viễn th&ocirc;ng, trong đ&oacute; c&oacute; OTT viễn th&ocirc;ng, nhằm đảm bảo an to&agrave;n, an ninh mạng v&agrave; quyền lợi người d&ugrave;ng.</p>
<article class="fck_detail ">
<p class="Normal">Tr&igrave;nh Quốc hội dự &aacute;n Luật Viễn th&ocirc;ng (sửa đổi) s&aacute;ng 2/6, Bộ trưởng Th&ocirc;ng tin v&agrave; Truyền th&ocirc;ng Nguyễn Mạnh H&ugrave;ng n&oacute;i trước đ&acirc;y, việc cung cấp dịch vụ viễn th&ocirc;ng phải c&oacute; hạ tầng mạng, v&agrave; quản l&yacute; hạ tầng mạng l&agrave; quản l&yacute; lu&ocirc;n được dịch vụ viễn th&ocirc;ng.</p>
<p class="Normal">C&ograve;n ng&agrave;y nay, tr&ecirc;n Internet cũng c&oacute; thể triển khai dịch vụ viễn th&ocirc;ng xuy&ecirc;n bi&ecirc;n giới, đặt ra b&agrave;i to&aacute;n quản l&yacute; phải bảo đảm nguy&ecirc;n tắc b&igrave;nh đẳng giữa c&aacute;c dịch vụ c&ugrave;ng vấn đề an to&agrave;n, an ninh. V&igrave; vậy, dự thảo quy định chi tiết về quản l&yacute; việc cung cấp v&agrave; h&igrave;nh thức cấp ph&eacute;p với dịch vụ viễn th&ocirc;ng, trong đ&oacute; c&oacute; trung t&acirc;m dữ liệu, điện to&aacute;n đ&aacute;m m&acirc;y để đảm bảo t&iacute;nh linh hoạt, đảm bảo cơ chế khuyến kh&iacute;ch dịch vụ mới ph&aacute;t triển.</p>
<p class="Normal">&Ocirc;ng H&ugrave;ng n&oacute;i th&ecirc;m, sự ph&aacute;t triển của c&ocirc;ng nghệ vệ tinh mới như vệ tinh ch&ugrave;m đặt ra y&ecirc;u cầu bổ sung, ho&agrave;n thiện quy định quản l&yacute; hoạt động cung cấp dịch vụ viễn th&ocirc;ng vệ tinh xuy&ecirc;n bi&ecirc;n giới v&agrave;o Việt Nam, bảo vệ quyền lợi của người sử dụng tại Việt Nam</p>
<figure class="image align-center"><img src="https://vcdn-vnexpress.vnecdn.net/2023/06/02/1a874784732fad71f43e-168567410-3241-6869-1685674603.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=uEI-6FbA5qbz38nSDb6Www" alt="Bộ trưởng Th&ocirc;ng tin v&agrave; Truyền th&ocirc;ng Nguyễn Mạnh H&ugrave;ng ph&aacute;t biểu s&aacute;ng 2/6. Ảnh: Media Quốc hội" width="800">
<figcaption>
<figure class="tplCaption action_thumb_added" data-size="true">
<figcaption>
<div class="Image">Bộ trưởng Th&ocirc;ng tin v&agrave; Truyền th&ocirc;ng Nguyễn Mạnh H&ugrave;ng s&aacute;ng 2/6. Ảnh:&nbsp;<em>Media Quốc hội</em></div>
</figcaption>
</figure>
</figcaption>
</figure>
<table style="border-collapse: collapse; width: 100%; height: 89.5624px;" border="1"><colgroup><col style="width: 19.9634%;"><col style="width: 19.9634%;"><col style="width: 19.9634%;"><col style="width: 19.9634%;"><col style="width: 19.9634%;"></colgroup>
<tbody>
<tr style="height: 22.3906px;">
<td style="height: 22.3906px;">1</td>
<td style="height: 22.3906px;">2</td>
<td style="height: 22.3906px;">3</td>
<td style="height: 22.3906px;">4</td>
<td style="height: 22.3906px;">5</td>
</tr>
<tr style="height: 22.3906px;">
<td style="height: 22.3906px;">&nbsp;</td>
<td style="height: 22.3906px;">&nbsp;</td>
<td style="height: 22.3906px;">&nbsp;</td>
<td style="height: 22.3906px;">&nbsp;</td>
<td style="height: 22.3906px;">&nbsp;</td>
</tr>
<tr style="height: 22.3906px;">
<td style="height: 22.3906px;">&nbsp;</td>
<td style="height: 22.3906px;">&nbsp;</td>
<td style="height: 22.3906px;">&nbsp;</td>
<td style="height: 22.3906px;">&nbsp;</td>
<td style="height: 22.3906px;">&nbsp;</td>
</tr>
<tr style="height: 22.3906px;">
<td style="height: 22.3906px;">&nbsp;</td>
<td style="height: 22.3906px;">&nbsp;</td>
<td style="height: 22.3906px;">&nbsp;</td>
<td style="height: 22.3906px;">&nbsp;</td>
<td style="height: 22.3906px;">&nbsp;</td>
</tr>
</tbody>
</table>
<p class="Normal">Đại diện cơ quan thẩm tra, &ocirc;ng L&ecirc; Quang Huy, Chủ nhiệm Ủy ban Khoa học, C&ocirc;ng nghệ v&agrave; M&ocirc;i trường, cho rằng OTT về bản chất l&agrave; d&ugrave;ng Internet để cung cấp phần mềm ứng dụng, như Zalo, Viber, Telegram. Theo kinh nghiệm quốc tế, về cơ bản, OTT được chia th&agrave;nh hai loại ch&iacute;nh, gồm OTT viễn th&ocirc;ng v&agrave; OTT cung cấp nội dung th&ocirc;ng tin</p>
<p class="Normal">OTT c&oacute; chức năng hội thoại, họp trực tuyến, chat, tin nhắn kh&ocirc;ng thu ph&iacute;. Đặc điểm n&agrave;y dẫn đến việc sử dụng dịch vụ OTT ph&aacute;t triển rất nhanh, ảnh hưởng lớn đến doanh thu tin nhắn v&agrave; thoại truyền thống của doanh nghiệp viễn th&ocirc;ng nhiều quốc gia, trong đ&oacute; c&oacute; thị trường Việt Nam. Quản l&yacute; OTT viễn th&ocirc;ng sẽ l&agrave; ch&iacute;nh s&aacute;ch quan trọng, c&oacute; t&aacute;c động lớn đến người d&acirc;n, doanh nghiệp, đến c&ocirc;ng cuộc chuyển đổi số, ph&aacute;t triển kinh tế số, x&atilde; hội số.</p>
<p class="Normal">Đa số &yacute; kiến của Ủy ban nhất tr&iacute; rằng việc ph&aacute;p luật chưa c&oacute; quy định quản l&yacute; về vấn đề n&agrave;y sẽ dẫn đến quyền lợi của người d&ugrave;ng chưa được bảo đảm về bảo mật dịch vụ, t&iacute;nh minh bạch, th&ocirc;ng tin, khả năng truy cập. Do đ&oacute;, OTT viễn th&ocirc;ng cần được quản l&yacute; theo c&aacute;ch thức ph&ugrave; hợp.</p>
<figure class="image align-center"><img src="https://vcdn-vnexpress.vnecdn.net/2023/06/02/983445387193afcdf682-6653-1685674603.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=orbhHJdyYuOSR3WxwblbFA" alt="Chủ nhiệm Ủy ban Khoa học, C&ocirc;ng nghệ v&agrave; M&ocirc;i trường L&ecirc; Quang Huy. Ảnh: Media Quốc hội" width="800">
<figcaption>
<figure class="tplCaption action_thumb_added" data-size="true">
<figcaption>
<p class="Image" style="text-align: left;">Chủ nhiệm Ủy ban Khoa học, C&ocirc;ng nghệ v&agrave; M&ocirc;i trường L&ecirc; Quang Huy. Ảnh:&nbsp;<em>Media Quốc hội</em></p>
</figcaption>
</figure>
</figcaption>
</figure>
<div class="sidebar-1">
<article class="fck_detail ">
<p class="Normal">Trước đ&oacute;, tại cuộc họp của Bộ Th&ocirc;ng tin v&agrave; Truyền th&ocirc;ng th&aacute;ng 4, &ocirc;ng Cao Anh Sơn, Tổng gi&aacute;m đốc Viettel Telecom, cho biết doanh nghiệp viễn th&ocirc;ng đang chứng kiến sự suy giảm lớn về dịch vụ gọi điện v&agrave; SMS, nhưng ứng dụng OTT lại ph&aacute;t triển mạnh mẽ, trong đ&oacute; c&oacute; những ứng dụng tăng trưởng ở mức hai con số. "Trong sự dịch chuyển đ&oacute;, nh&agrave; mạng lu&ocirc;n đảm bảo hạ tầng cho c&aacute;c OTT ph&aacute;t triển, tuy nhi&ecirc;n lại kh&ocirc;ng được chia sẻ về đầu tư hạ tầng. G&aacute;nh nặng cho nh&agrave; mạng trong đầu tư hạ tầng l&agrave; vấn đề lớn", &ocirc;ng Sơn n&oacute;i.</p>
<p class="Normal">C&ograve;n trong cuộc họp giữa th&aacute;ng 4 của Ủy ban Thường vụ Quốc hội, Bộ trưởng Th&ocirc;ng tin v&agrave; Truyền th&ocirc;ng Nguyễn Mạnh H&ugrave;ng cho rằng 90% dung lượng mạng đang phục vụ dịch vụ OTT, nhưng nh&agrave; mạng kh&ocirc;ng thu được lợi nhuận tương ứng để đảm bảo hạ tầng.</p>
<p class="Normal">"L&agrave;m c&aacute;ch n&agrave;o để ph&aacute;t triển hạ tầng mạng khi c&aacute;c OTT ng&agrave;y một gi&agrave;u l&ecirc;n, c&ograve;n nh&agrave; mạng đang ngh&egrave;o đi?", Bộ trưởng đặt c&acirc;u hỏi.</p>
<p class="Normal">B&ecirc;n cạnh đ&oacute;, tại cuộc họp s&aacute;ng nay, c&oacute; &yacute; kiến cho rằng việc dự thảo đưa trung t&acirc;m dữ liệu, điện to&aacute;n đ&aacute;m m&acirc;y v&agrave; viễn th&ocirc;ng cơ bản tr&ecirc;n Internet v&agrave;o nh&oacute;m cần điều chỉnh c&oacute; thể sẽ l&agrave;m tăng chi ph&iacute; tu&acirc;n thủ của doanh nghiệp li&ecirc;n quan, ảnh hưởng đến lợi &iacute;ch m&agrave; dịch vụ đ&oacute; c&oacute; thể mang lại đối với nền kinh tế, t&aacute;c động ti&ecirc;u cực đến thu h&uacute;t đầu tư nước ngo&agrave;i tại Việt Nam.</p>
<p class="Normal">Do đ&oacute;, Ủy ban đề nghị cơ quan chủ tr&igrave; soạn thảo nghi&ecirc;n cứu v&agrave; tham khảo kinh nghiệm lập ph&aacute;p của c&aacute;c nước, l&agrave;m r&otilde; hơn việc mở rộng phạm vi điều chỉnh của dự thảo v&agrave; b&aacute;o c&aacute;o Quốc hội về định hướng thiết kế hệ thống luật li&ecirc;n quan đến lĩnh vực c&ocirc;ng nghệ th&ocirc;ng tin v&agrave; truyền th&ocirc;ng thời gian tới.</p>
<p class="Normal" style="text-align: right;"><span style="font-size: 14pt;"><strong>Sơn H&agrave;</strong></span><a class="thumb thumb-5x3" title="Thế giới ngầm Telegram tại Việt Nam" href="https://vnexpress.net/the-gioi-ngam-telegram-tai-viet-nam-4599604.html" data-itm-source="#vn_source=Detail-SoHoa_CongNghe-4612674&amp;vn_campaign=Box-TinXemThem&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1"><picture><source srcset="https://vcdn1-sohoa.vnecdn.net/2023/04/30/telegramDSC0880711581682848534-1890-9541-1682851458.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=ppEwiqUIiTvOo6y2iW4TJQ 1x, https://vcdn1-sohoa.vnecdn.net/2023/04/30/telegramDSC0880711581682848534-1890-9541-1682851458.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=r-WxQPVcoLuPrmON8Ks9ZQ 2x" data-srcset="https://vcdn1-sohoa.vnecdn.net/2023/04/30/telegramDSC0880711581682848534-1890-9541-1682851458.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=ppEwiqUIiTvOo6y2iW4TJQ 1x, https://vcdn1-sohoa.vnecdn.net/2023/04/30/telegramDSC0880711581682848534-1890-9541-1682851458.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=r-WxQPVcoLuPrmON8Ks9ZQ 2x"></picture></a></p>
<div class="width_common box-tinlienquanv2 ">&nbsp;</div>
</article>
</div>
<div class="popup-zoom flexbox">&nbsp;</div>
</article>`,
                })
                let rs = await newPost.save()

                categories.forEach(async (e) => {
                    if (Math.random() > 0) await new post_category({postId: rs._id, categoryId: e}).save()
                })
            }, 1500 * i)
        })

        res.send('done')
    } catch (error) {
        res.send({status: false, ...error})
    }
}

export default getNews
