$(document).ready(function(){
    $.getJSON("playerData.json", function(data){

        var playerData = '';
        $.each(data, function(key,value){
            playerData += '<tr>';
            playerData += '<td>'+value.Name+'</td>';
            playerData += '<td>'+value.ImgURL+'</td>';
            playerData += '<td>'+value.Team+'</td>';
            playerData += '<td>'+value.Type+'</td>';
            playerData += '<td>'+value.Born+'</td>';
            playerData += '<td>'+value.Age+'</td>';
            playerData += '<td>'+value.NationalSide+'</td>';
            playerData += '<td>'+value.BattingStyle+'</td>';
            playerData += '<td>'+value.Bowling+'</td>';
            playerData += '<td>'+value.MatchPlayed+'</td>';
            playerData += '<td>'+value.InningsBatted+'</td>';
            playerData += '<td>'+value.NotOuts+'</td>';
            playerData += '<td>'+value.RunsScored+'</td>';
            playerData += '<td>'+value.HighestInnScore+'</td>';
            playerData += '<td>'+value.s100s+'</td>';
            playerData += '<td>'+value.s50s+'</td>';
            playerData += '<td>'+value.s4s+'</td>';
            playerData += '<td>'+value.s6s+'</td>';
            playerData += '<td>'+value.BattingAVG+'</td>';
            playerData += '</tr>';
        });
        $('#table').append(playerData);
    });
});