<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="dist/css/font-awesome.min.css">
</head>
<body>
<?php
function render($page) {
    $file = __DIR__ . '/views/' . $page . '.php';
    if (file_exists($file)) {
        include $file;
    }
}
$page = $_GET['page'];
?>
<?php render('header')?>

<div class="container">
    <?php render($page)?>
</div>

<?php render('footer')?>


<script src="dist/js/jquery-3.2.1.min.js"></script>
<script src="dist/js/bootstrap.min.js"></script>
</body>
</html>