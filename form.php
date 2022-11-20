<html>
<head>
<title>Thank you</title>
<script src="script.js"></script>
<style type="text/css">
    body {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(127, 88, 219);
        background: radial-gradient(circle, rgba(127, 88, 219, 1) 0%, #03061c 100%);
    }


  #formAnswer {
    height: 300px;
    width: 500px;
    padding: 50px 40px;
    background: transparent;
  }

  #formAnswer p{
    font-size: 34px;
    background: transparent;
    margin-bottom: 20px;
    color:white;
  }


  #formAnswer a{
    font-size: 22px;
    color: black;
    padding: 13px 20px;
    border-radius: 4px;
    background: #d9fa8b;
    text-decoration: none;
    margin-top: 30px;
  }

  #formAnswer a:hover{
    cursor: pointer;
    background: #C6F162;
  }
</style>
<body>
    <div id="formAnswer">
		<p>
      Thanks for the message <?php echo $_POST["name"]; ?>.<br><br> I'll respond as soon as I can!
		</p>
		<a href="./index.html" onclick="windowClose();">Close Tab</a>
	</div>
</body>
</html>