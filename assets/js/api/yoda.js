$('#but').click( function() {
    var input = document.getElementById('input').value;
    $.getJSON("https://api.funtranslations.com/translate/yoda.json?text=" + input, function( data ) {
       $('#result').append(data.contents.translated);
    });
});