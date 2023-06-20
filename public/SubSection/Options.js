import {Select} from '@mantine/core';

function Options() {
    let listPromotion = [
        {value: '1', label: '5%'},
        {value: '2', label: '10%'},
        {value: '3', label: '30%'},
        {value: '4', label: '50%'},
    ];
    let listPaymentMethod = [
        {value: '1', label: 'Tiền mặt'},
        {value: '2', label: 'Chuyển khoản'},
        {value: '3', label: 'Quẹt thẻ'},
    ];
    return (
        <>
            <Select defaultValue={listPromotion[0].value} data={listPromotion} label='Khuyến mại'></Select>
            <Select
                defaultValue={listPaymentMethod[0].value}
                data={listPaymentMethod}
                label='Phương thức thanh toán'></Select>
        </>
    );
}

export default Options;
