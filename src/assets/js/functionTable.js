function myfunction  ()
{ $(document).load(function () {
    $('#dtHorizontalExample').DataTable({
    "scrollX": true
    });
    $('.dataTables_length').addClass('bs-select');
    });
}