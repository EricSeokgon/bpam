<%@ page contentType="text/html;charset=utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head><title>Login Page for Examples</title></head>
<body>
<form method="POST" action='<%= response.encodeURL("j_security_check") %>' >
  Username:<input type="text" name="j_username">
  Password:<input type="password" name="j_password">
  <input type="submit" value="Log In">
</form>
</body>
</html>