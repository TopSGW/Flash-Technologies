export const Data = {
    datasets: [
        {
            label: "Flash Token",
            data: [5, 1, 1, 3],
            backgroundColor: [ "#5E95FF","#039D81","#FF8D08",  "#FF0808"],
            borderColor: [  "#5E95FF", "#039D81", "#FF8D08",  "#FF0808"],
            offset:[ 10,10,10,10 ],
            hoverOffset: -10,
            borderWidth: [ 10,10,10,10],
            // borderWidth:10,
            paddig:5,
            borderRadius: 2,
     //       borderSpacing: [ 15,15,20,20 ],
            hoverBorderColor:["#0D5BE1","#13DAE9 ", "#FFB347", "#DD0004" ],
            hoverBorderWidth:[ 10, 10, 10, 10 ],
       //     spacing: 20,
            borderShadowColor: [ "#5E95FF"],
            cutoutPercentage: 0  
        }
    ]
}
export const DataMobile = {
    datasets: [
        {
            label: "Flash Token",
            data: [5, 1, 1, 3],
            backgroundColor: [ "#5E95FF","#039D81","#FF8D08",  "#FF0808"],
            borderColor: [  "#5E95FF", "#039D81", "#FF8D08",  "#FF0808"],
            offset:[ 10,10,10 ],
            hoverOffset: -10,
            borderWidth: [ 10,10,10],
            // borderWidth:10,
            paddig:5,
            borderRadius: 2,
     //       borderSpacing: [ 15,15,20,20 ],
            hoverBorderColor:["#0D5BE1","#13DAE9 ", "#FFB347", "#DD0004" ],
            hoverBorderWidth:[ 10, 10, 10],
            spacing: 8,
            borderShadowColor: [ "#5E95FF"],
            cutoutPercentage: 0  
        }
    ]
}
export const TransferChartData = {
    labels: ["1% Marketing", "1% Liquidity", "1% Burn"],
    datasets: [
        {
            label: "Flash Token",
            data: [3, 3, 3],
            backgroundColor: [ "#5E95FF","#039D81","#FF8D08",  "#FF0808"],
            borderColor: [  "#5E95FF", "#039D81", "#FF8D08",  "#FF0808"],
            offset:[ 10,10,10],
            hoverOffset: -10,
            borderWidth: [ 10,10,10],
            // borderWidth:10,
//            paddig:5,
  //          borderRadius: 2,
     //       borderSpacing: [ 15,15,20,20 ],
            hoverBorderColor:["#0D5BE1","#13DAE9 ", "#FFB347", "#DD0004" ],
            hoverBorderWidth:[ 10, 10, 10],
       //     spacing: 20,
            borderShadowColor: [ "#5E95FF"],
            cutoutPercentage: 0  
        }
    ]
}

export const Options = {
    cutout: "97%",
//    cutoutPercentage: 20,
    responsive: true,
    plugins: {
        legend: {
            display: false
        }
    },
    onHover: (event, chartElement) => {
        // console.log(chartElement)
        if(chartElement[0]?.index == 0){
            let marketing = document.getElementById('marketing') 
            marketing.style.color ='#0D5BE1'
            marketing.style.transition = "100ms linear all"
        }else if(chartElement[0]?.index == 1){
            let liquidity = document.getElementById('liquidity') 
            liquidity.style.color ='#13DAE9 '
            liquidity.style.transition = "100ms linear all"
        }
        else if(chartElement[0]?.index == 2){
            let burn = document.getElementById('burn')
            burn.style.color ='#FFB347'
            burn.style.transition = "100ms linear all"
        }
        else if(chartElement[0]?.index == 3){
            let burn = document.getElementById('reward')
            burn.style.color ='#DD0004'
            burn.style.transition = "100ms linear all"
        }
        else{
            document.getElementById('burn').style.color ='#FF8D08'
            document.getElementById('marketing').style.color ='#5E95FF'
            document.getElementById('liquidity').style.color ='#039D81'
            document.getElementById('reward').style.color = "#FF0808"
        }
        event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default'
    }
}

export const chartLabel = {
    id: "center-label",
    beforeDraw: function(chart) {

     let width = chart.width
     let height = chart.height
     let ctx = chart.ctx
     
     ctx.restore()
     var fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em Manrope";
      ctx.textBaseline = "middle";
      var text = "10%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2.5;
          ctx.fillStyle = "rgb(255,255,255)"
      ctx.fillText(text, textX, textY);
      ctx.save();

       fontSize = (height / 300).toFixed(2);
      ctx.font = fontSize + "em Manrope";
      ctx.textBaseline = "middle";
      var text = "TRANSACTION FEES",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height/1.8;
          ctx.fillStyle = "rgba(255,255,255,0.5)"
      ctx.fillText(text, textX, textY);
      ctx.save();
    }
}
export const transferChartLabel = {
    id: "center-label",
    beforeDraw: function(chart) {

        let width = chart.width
        let height = chart.height
        let ctx = chart.ctx
        
        ctx.restore()
        var fontSize = (height / 114).toFixed(2);
         ctx.font = fontSize + "em Manrope";
         ctx.textBaseline = "middle";
         var text = "0%",
             textX = Math.round((width - ctx.measureText(text).width) / 2),
             textY = height / 2.5;
             ctx.fillStyle = "rgb(255,255,255)"
         ctx.fillText(text, textX, textY);
         ctx.save();
   
          fontSize = (height / 300).toFixed(2);
         ctx.font = fontSize + "em Manrope";
         ctx.textBaseline = "middle";
         var text = "TRANSACTION FEES",
             textX = Math.round((width - ctx.measureText(text).width) / 2),
             textY = height/1.8;
             ctx.fillStyle = "rgba(255,255,255,0.5)"
         ctx.fillText(text, textX, textY);
         ctx.save();
       }   
}
