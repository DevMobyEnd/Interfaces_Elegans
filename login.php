<?php
if (!isset($_SESSION)) session_start(); 
if (!isset($_SESSION['stop'])) $_SESSION['stop'] = 0;
$_SESSION['stop'] += 1;

if ($_SESSION['stop'] >= 3) {
    echo 'no pasas';
} else {
    echo $_SESSION['stop'];
}