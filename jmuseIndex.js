<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>PlayIt</title>

    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/css/materialize.min.css">
    <link rel="stylesheet" href="static/css/style.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js" type="text/javascript"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
</head>
<body>
<canvas class="visualizer" id="viz" ></canvas>
	<nav class="grey lighten-5" role="navigation">
		<div class="nav-wrapper container">
		<a id="logo-container" href="//educ.jmu.edu/~sargenlt/jmuse/" class="brand-logo">
			<img src="static/img/playIt_logo.png" style="margin-top:6px;" />
		</a>
			<ul class="right">
        		<li style="padding-left:10px;padding-right:10px;cursor:pointer;" id="addBtn"><i class="mdi-content-add light-blue-text" id="addIcon"></i></li>
        		<li style="padding-left:10px;padding-right:10px;cursor:pointer;" id="playBtn"><i class="mdi-av-play-arrow light-blue-text" id="playIcon"></i></li>
        		<li style="padding-left:10px;padding-right:10px;cursor:pointer;" id="forwardBtn"><i class="mdi-av-skip-next light-blue-text" id="forwardIcon"></i></li>
        		<li style="padding-left:10px;padding-right:10px;cursor:pointer;" id="clearBtn"><i class="mdi-content-clear light-blue-text" id="clearIcon"></i></li>
      		</ul>
      		<input type="file" name="localFileDiag" id="localFileDiag" style="display:none;" accept="audio/*"/>
		</div>
	</nav>
	<div class="section no-pad-bot" id="index-banner">
		<div class="container" style="background-color:rgba(255, 255, 255, 0.6) !important;border-radius:3px;">
			<div class="row" style="margin-top:16px;">
				<div class="col s5" style="margin-top:16px;">
					<h3 class="header orange-text">Playlist</h3>
					<ul class="collapsible" data-collapsible="accordion" id="playlistGUI">

  					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col s12">
					<h5 class="header orange-text">PlayIt Instructions</h5>
					<ol>
						<li>Click the + sign to add a new file to the playlist.  Files are added locally so no files are uploaded to the server.</li>	
						<li>You may add multiple audio files, the files will be added to the playlist above.</li>
						<li>Select the song/audio file that you would like to listen to and use the audio control at in the top right corner to "Play", "Pause", and "Clear" the playlist.</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/js/materialize.min.js"></script>
	<script src="js/database.js" type="text/javascript"></script>
	<script src="js/playFunctions.js" type="text/javascript"></script>
    <script src="js/player.js" type="text/javascript"></script>

    <!-- <script src="js/drummachine.js"></script> -->
    
    <!-- <input type="file" style="visibility:hidden;" id="uploadme" /> -->
    <!-- <input type="button" id="clickme" value="Upload mp3!" /> -->
    
   

    <!-- <button id ='drumMachine'>Drum Machine GO</button> -->
        <!-- <script type="text/javascript"> -->
            <!-- document.getElementById("drumMachine").addEventListener("click", drumMachine()); -->
        <!-- </script> -->


	<!---<iframe id="debuggerId" class="debuggerContainer" src="IDBExplorer/IDBExplorer.html?name=audioFileDB"></iframe>--->

	</body>
</html>
