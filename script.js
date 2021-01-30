// if user increment or decrement by plus or minus sign
function countTicket(className, isIncrement)
{
    const specificTicketCount = getInputValue(className);
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

// if user increment or decrement from input tag
function countTicketInputField(className)
{
    ticketPriceCalculation();
}


function ticketPriceCalculation()
{
    const totalFirstClass = getInputValue('firstClass');
    const totalEconomyClass = getInputValue('economyClass');

    const subTotal = totalFirstClass * 150 + totalEconomyClass * 100;
    const vat = subTotal * 0.1;
    const total = subTotal + vat;

    document.getElementById('sub-total').innerText = '$' + subTotal;
    document.getElementById('vat').innerText = '$' + vat;
    document.getElementById('total-price').innerText = '$' + total;

    // display user the summary after buying ticket
    document.getElementById('displayQuantityFirst').innerText = totalFirstClass;
    document.getElementById('displayQuantityEconomy').innerText = totalEconomyClass;
    document.getElementById('displayTotalFirst').innerText = '$' + totalFirstClass * 150;
    document.getElementById('displayTotalEconomy').innerText = '$' + totalEconomyClass * 100;
    document.getElementById('displaySubtotal').innerText = '$' + subTotal;
    document.getElementById('displayVat').innerText = '$' + vat;
    document.getElementById('displayTotal').innerText = '$' + total;
}


function getInputValue(className)
{
    const countTicket = document.getElementById(className + '-count').value;
    return countTicket;
}


function bookingTicket()
{
    document.getElementById('booking-form').style.display = 'none';
    document.getElementById('booking-info').style.display = 'block';
}