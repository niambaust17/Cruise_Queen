function countTicket(className, isIncrement)
{
    const specificTicketCount = document.getElementById(className + '-count').value;
    let specificTicketCountNew = parseInt(specificTicketCount);
    if (isIncrement == true)
    {
        specificTicketCountNew = specificTicketCountNew + 1;
    }
    if (isIncrement == false && specificTicketCountNew > 0)
    {
        specificTicketCountNew = specificTicketCountNew - 1;
    }
    document.getElementById(className + '-count').value = specificTicketCountNew;
    ticketPriceCalculation();
}


function ticketPriceCalculation()
{
    const totalFirstClass = document.getElementById('firstClass-count').value;
    const totalEconomyClass = document.getElementById('economyClass-count').value;
    // console.log(totalFirstClass, totalEconomyClass);
    const subTotal = totalFirstClass * 150 + totalEconomyClass * 100;
    const vat = subTotal * 0.1;
    const total = subTotal + vat;
    document.getElementById('sub-total').innerText = '$' + subTotal;
    document.getElementById('vat').innerText = '$' + vat;
    document.getElementById('total-price').innerText = '$' + total;
}