# HR-React-Starter
react koa webpack
onWheel={(e)=>{
                console.log('wheel');
               if(e.deltaY>0&&_.currentAnchor<_.container.childNodes.length-1)
               {   _.currentAnchor++;
                   }
                if(e.deltaY<0&&_.currentAnchor>0)
                {   _.currentAnchor--;
                    _.container.scrollTop=_.anchor[_.currentAnchor]}
            }}
getBoundingClientRect（）
height width 宽高
一屏幕左上方为o点，o点距离元素上边距离为top下边距离为botton，左边距离为left，右边距离为right

对于overflow容器，
    容器视口上边距离容器顶部的距离为scrollTop，
    下边距离容器底部的距离为scrollBottom，
