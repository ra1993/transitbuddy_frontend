import React, {Component, useState} from "react";
import {Timeline} from 'react-twitter-widgets';
import ReactDOM from 'react-dom';

function mtaFeed() {



return (

<center>
<div className = "MtaTwitter" class = "card-wrapper">
<a class="twitter-timeline" data-lang="en" data-width="500" data-height="800" data-theme="dark" href="https://twitter.com/MTA?ref_src=twsrc%5Etfw"></a> 
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
</div>
</center>



)
}
export default mtaFeed