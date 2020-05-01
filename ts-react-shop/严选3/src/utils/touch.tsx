export let myTouch = {
  /**
   * @param {object} el:添加事件的DOM元素
   * @param {function} callback:单击事件执行的回调函数
   * @param {dir} dir 定义方向
   * @function [封装滑动事件：左滑，右滑，上滑，下滑]
   */
  swiper: function (el: any, dir: string, callback: Function) {
    // 开始坐标点
    var startPoint: any = null;
    // 结束坐标点
    var endPoint: any = null;

    el.addEventListener('touchstart', function (e: any) {
      var myPoint = e.touches[0];
      startPoint = {
        x: myPoint.clientX,
        y: myPoint.clientY
      }
    })
    // 触点移动
    el.addEventListener('touchmove', function (e: any) {
      var myPoint = e.touches[0];
      endPoint = {
        x: myPoint.clientX,
        y: myPoint.clientY
      }
    })

    //  触点离开
    el.addEventListener('touchend', function () {
      //计算坐标差值 
      if (startPoint && endPoint && count(startPoint, endPoint) == dir) {
        callback && callback();
        // if(callback){
        //     callback()
        // }
      }
    })

    function count(start: any, end: any) {
      // 水平
      var diffX = end.x - start.x;
      var diffY = end.y - start.y;
      var text = "";
      // 求绝对值
      var absX = Math.abs(diffX);
      var absY = Math.abs(diffY);
      if (absX > 30 || absY > 30) {
        // 水平或垂直
        if (absX > absY) {
          // 水平
          text = diffX > 0 ? "right" : "left";
        } else {
          //垂直
          text = diffY > 0 ? "bottom" : "top";
        }
      }
      return text;
    }

    // 开始坐标点
    startPoint = null;
    // 结束坐标点
    endPoint = null;
  }
}
