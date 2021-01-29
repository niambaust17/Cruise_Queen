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
}