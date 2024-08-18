import{userProfileContent, sideBarContent, topBarContent} from "../data/youtube-data.js";

let pageElemenHTMLInner='';
let sideBarHTMLInner='';
userProfileContent.forEach((arrayValue)=>{
    const pageElemenHTML=` <div class="block1">
                <div class="thumbnail">
                    <img class="channel-pic" src="${arrayValue.thumbnail}" alt="">
                    <p class="video-time">${arrayValue.duration}</p>
                </div>
                <div class="profile-info">
                    <img src="${arrayValue.channelPic}" class="channel" alt="">
                    <div>
                        <p class="profile-description">${arrayValue.profileDescription}</p>
                        <div class="profile-credentials">
                            <p class="profile-name">${arrayValue.profileName}</p>
                            <p class="profile-views">${arrayValue.profileViews} views . ${arrayValue.channelUpdate}</p>
                        </div>
                    </div>
                </div>
            </div>`;
        pageElemenHTMLInner+=pageElemenHTML;
});
document.querySelector('.wrapper').innerHTML=pageElemenHTMLInner;


sideBarContent.forEach((arrayValue)=>{
    const sideBarHTML=` <div class="icon-name-paire">
    <img src="${arrayValue.icon}" alt="">
    <p>${arrayValue.iconName}</p>
    </div>`
sideBarHTMLInner+=sideBarHTML;
});
document.querySelector('.side-bar').innerHTML=sideBarHTMLInner;


const topPage=`<div class="left-side">
                    <img class="hamburger-menu" src="${topBarContent.top1.right1.iconPath}" alt="hr">

                   <img class="youtube-logo" src="${topBarContent.top1.right2.iconPath}" alt="">
                   
            </div>
            <div class="middle-side">
                <input class="search-bar" type="text" placeholder="Search">
                <div class="search-icon-box">
                    <img class="search-icon" src="${topBarContent.top2.right1.iconPath}" alt="">
                </div>
                <div class="invisible-tool-tip">
                   <img class="voice-search" src="${topBarContent.top2.right2.iconPath}" alt="">
                   <p class="tool-tip">${topBarContent.top2.right2.icobName}</p>
                </div>
            </div>
            <div class="right-side">
              <div class="invisible-tool-tip">
                <img src="${topBarContent.top3.right1.iconPath}" alt="">
                <p class="tool-tip">${topBarContent.top3.right1.icobName}</p>
              </div>
              <div class="invisible-tool-tip">
                <img src="${topBarContent.top3.right2.iconPath}" alt="">
                <p class="tool-tip">${topBarContent.top3.right2.icobName}</p>
              </div>
              <div class="invisible-tool-tip">
                <div class="notification-count-content">
                    <img src="${topBarContent.top3.right3.iconPath}" alt="">
                    <p class="notification-count">3</p>
                </div>
                <p class="tool-tip">${topBarContent.top3.right3.icobName}</p>
              </div>
                <div  class="my-channel-box invisible-tool-tip">
                   <img  class"my-channel" src="${topBarContent.top3.right4.iconPath}" alt="">
                   <p class="tool-tip">${topBarContent.top3.right4.icobName}</p>
                </div>
            </div>`;

document.querySelector('.top-bar').innerHTML=topPage;