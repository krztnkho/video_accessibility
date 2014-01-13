#Video Player - Accessibility

##What is a Caption?
 Captions, whether open or closed, are words displayed on a video that explains the audio of a program to let viewers who are deaf or hard of hearing understand the dialogue and action of a program at the same time.

[Read more](http://www.ehow.com/about_6706664_closed-captioning-vs_-open-captioning.html#ixzz2qFFF57rI)

##Closed caption vs open caption
 With closed caption the user has the option to turn the captions on/off whereas with open captions the captions are embedded in the video

##Adding a closed caption to your site
###HTML5:
  With HTML5 you can directly add a caption using the track tag.  Here's an example:

    <video width="320" height="240" controls>
      <source src="sample.mp4" type="video/mp4">
      <track kind="captions" label="English Captions" src="caption_en.vtt" srclang="en"></track>
    </video>
[
More info on html5 track tag and webvtt.](http://www.html5rocks.com/en/tutorials/track/basics/)


###[Captions with JWPlayer](http://www.longtailvideo.com/support/jw-player/28845/adding-video-captions/)


##The problem is how to create the caption file. Should we address that or just assume that the caption file is already there? if not here are other options:
* manual
* transcriptionist
* captioning software
* speech to text
    - I'm currently trying to use [Google's web speech api](http://commondatastorage.googleapis.com/io-2013/presentations/4057%20Web%20Speech%20API%20creates%20Interactive%20Experiences%20-%20Google%20I-O%202013%20Codelab.pdf) with video. It can actually convert to text inputs from microphone and [.wav file](https://www.youtube.com/watch?v=6Qcy2RTMnwo)