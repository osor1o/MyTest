<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="pt-br">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title></title>

    <style type="text/css">
    </style>    
</head>
<body style="margin:0; padding:0; background-color:#F2F2F2;font-family: Arial, Helvetica, sans-serif;">
    <center>
        <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#F2F2F2">
            <tr>
                <td height="50" style="font-size:10px; line-height:10px;">&nbsp;</td>
            </tr>
            <tr>
                <td align="center" valign="top">
                    <h1 style="padding: 0;margin: 0;">MyTest</h1>
                </td>
            </tr>
            <tr>
                <td height="30" style="font-size:10px; line-height:10px;">&nbsp;</td>
            </tr>
            <tr>
                <td align="center" valign="top">
                    Bem vindo <b>{{ $name }}</b>, ative sua conta clicando no link abaixo para ter acesso aos nossos serviços.
                </td>
            </tr>
            <tr>
                <td height="30" style="font-size:10px; line-height:10px;">&nbsp;</td>
            </tr>
            <tr>
                <td align="center" valign="top">
                    <a href="{{ $link }}" target="_blank" style="color:#66cccc;text-decoration: underline;color: #00b8df;">
                        <h2 style="padding: 0;margin: 0;">Ativar Conta</h2>
                    </a>
                </td>
            </tr>
            <tr>
                <td height="50" style="font-size:10px; line-height:10px;">&nbsp;</td>
            </tr>
        </table>
    </center>
</body>
</html>