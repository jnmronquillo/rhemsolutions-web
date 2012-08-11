$(document).ready( function(){

  var c_scrum;
  var ct_scrum;
  var container_scrum;
  var c_ventas;
  var ct_ventas;
  var container_ventas;
  var c_organigrama;
  var ct_organigrama;
  var container_organigrama;
  
  function respondCanvasScrum(){
	   if(!$(container_scrum).is(":visible"))
	   return;
	    c_scrum.attr('width', $(container_scrum).width() ); //max width
	    c_scrum.attr('height', $(container_scrum).height() ); //max height

	    //Call a function to redraw other content (texts, images etc)
		draw_scrum(c_scrum.width(), c_scrum.height());
  }
	  
  function respondCanvasVentas(){
	 if(!$(container_ventas).is(":visible"))
	 return;
	 c_ventas.attr('width', $(container_ventas).width() ); //max width
	 c_ventas.attr('height', $(container_ventas).height() ); //max height

	//Call a function to redraw other content (texts, images etc)
	draw_ventas(c_ventas.width(), c_ventas.height());
  }
  
  function respondCanvasOrganigrama(){
    if(!$(container_organigrama).is(":visible"))
	 return;
	 c_organigrama.attr('width', $(container_organigrama).width() ); //max width
	 c_organigrama.attr('height', $(container_organigrama).height() ); //max height

	//Call a function to redraw other content (texts, images etc)
	draw_organigrama(c_organigrama.width(), c_organigrama.height());
  }
	
  //Get the canvas & context
  c_scrum = $('#scrumCanvas');
  if(typeof(c_scrum.get(0)) != 'undefined'){
   ct_scrum = c_scrum.get(0).getContext('2d');
   container_scrum = $(c_scrum).parent();
 //Run function when browser resizes
   $(window).resize( respondCanvasScrum );
 //Initial call
   respondCanvasScrum();
  }
  
  c_ventas = $('#ventasCanvas');  
  if(typeof(c_ventas.get(0)) != 'undefined'){
   ct_ventas = c_ventas.get(0).getContext('2d');
   container_ventas = $(c_ventas).parent();
   $(window).resize( respondCanvasVentas );
   respondCanvasVentas();
  }
  
  
  c_organigrama = $('#organigramaCanvas');  
  if(typeof(c_organigrama.get(0)) != 'undefined'){
   ct_organigrama = c_organigrama.get(0).getContext('2d');
   container_organigrama = $(c_organigrama).parent();
   $(window).resize( respondCanvasOrganigrama );
   respondCanvasOrganigrama();
  }
  
  $("#menu-btn").click(function(){
   if(!$("#sky ul ul").is(":visible")){
    $("#sky").css('height','334px');
	$("header").css('height','334px');
    $("#sky ul ul").css('display','block');
   }else{
    $("#sky").css('height','104px');
	$("header").css('height','104px');
    $("#sky ul ul").css('display','none');
   }
  });
    
  
  /*draw*/
  function draw_scrum(w,h){
   
	var size = w/25;
   ct_scrum.font = size+"px Calibri";   
   ct_scrum.fillStyle = "#FFFFFF"; //black
   ct_scrum.fillRect (0, 0, w, h);
  var box_h = w/10;
  var box_w = w/5 - 5;
  
  var x_box = w/50;
  var gradient = ct_scrum.createLinearGradient(0, 0, 0, box_h);
  gradient.addColorStop(0, '#EDDAB3'); 
  gradient.addColorStop(1, '#F4E5C7'); 

  var y1_box = w/20;
  
  ct_scrum.textAlign = "center";
  
  var text_color = "#333333";
  
  var y1_text = w/9;
  var x_text = w/9;
  
  ct_scrum.fillStyle = gradient;
  ct_scrum.fillRect (x_box, y1_box, box_w , box_h);
  ct_scrum.fillStyle = text_color; 
  ct_scrum.fillText("Sprint #1", x_text, y1_text );

  ct_scrum.fillStyle = gradient;
  var y2_box = y1_box + box_h +3;
  ct_scrum.fillRect (x_box, y2_box, box_w , box_h);  
  ct_scrum.fillStyle = text_color;
  var y2_text = y1_text + box_h+3;
  ct_scrum.fillText("Sprint #2", x_text, y2_text );
  
  ct_scrum.fillStyle = gradient;
  var y3_box = y1_box + 2*box_h +6;
  ct_scrum.fillRect (x_box, y3_box, box_w , box_h);  
  ct_scrum.fillStyle = text_color;
  var y3_text = y1_text + 2*box_h+6;
  ct_scrum.fillText("Sprint #3", x_text, y3_text );
  
  ct_scrum.fillStyle = gradient;
  var y4_box = y1_box + 3*box_h +9;
  ct_scrum.fillRect (x_box, y4_box, box_w , box_h);  
  ct_scrum.fillStyle = text_color;
  var y4_text = y1_text + 3*box_h+7;
  ct_scrum.fillText("Sprint #4", x_text, y4_text );
  
  var line_w = w - 2*x_box;
  //line base
  ct_scrum.beginPath();
  var y1_line = y1_box + 4*box_h +13;
  ct_scrum.moveTo(x_box,y1_line);
  ct_scrum.lineTo(line_w + x_box,y1_line);
  ct_scrum.stroke();
  
  var x2_box = line_w - box_w + x_box;
  var x2_text = w - x_text-3;
  
  ct_scrum.fillStyle = gradient;
  ct_scrum.fillRect (x2_box, y2_box, box_w , box_h);  
  ct_scrum.fillStyle = text_color;
  ct_scrum.fillText("Sprint #3", x2_text, y2_text);
  
  ct_scrum.fillStyle = gradient;
  ct_scrum.fillRect (x2_box, y3_box, box_w , box_h);  
  ct_scrum.fillStyle = text_color;
  ct_scrum.fillText("Sprint #2", x2_text, y3_text);
  
  ct_scrum.fillStyle = gradient;
  ct_scrum.fillRect (x2_box, y4_box, box_w , box_h);  
  ct_scrum.fillStyle = text_color;
  ct_scrum.fillText("Sprint #1", x2_text, y4_text);
  
  //line vertical start
  ct_scrum.beginPath();
  var y2_line = y1_line +20;
  ct_scrum.moveTo(x_box,y2_line);
  ct_scrum.lineTo(line_w + x_box,y2_line);
  ct_scrum.stroke();
  //line vertical end
  ct_scrum.beginPath();
  var y3_line = y1_line +10;
  ct_scrum.moveTo(x_box,y3_line);
  ct_scrum.lineTo(x_box,y3_line+20);
  ct_scrum.stroke();
  //line time
  ct_scrum.beginPath();
  ct_scrum.moveTo(line_w + x_box,y3_line);
  ct_scrum.lineTo(line_w + x_box,y3_line+20);
  ct_scrum.stroke();
  
  ct_scrum.fillStyle = text_color;
  ct_scrum.fillText("t", w/2, y3_line+30);
  
  
  var centerX = w/ 2;
  var radius = w/6;//70
  
  var centerY = y1_line - radius-16;
  
  //circle
  ct_scrum.beginPath();
  ct_scrum.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ct_scrum.fillStyle = gradient;
  ct_scrum.fill();
  ct_scrum.lineWidth = 2;
  ct_scrum.strokeStyle = text_color;
  ct_scrum.stroke();

  //text circle
  ct_scrum.fillStyle = text_color;
  ct_scrum.fillText("XP", centerX, centerY+5);
  
  //arrow circle
  canvas_arrow(w/2+5, y3_line-20-6, w/2+5, y3_line-20-6, text_color, ct_scrum);
  //arrow left
  canvas_arrow(x_box + box_w +10, y3_line-20-6, w/2+5 -40, y3_line-20-6, text_color, ct_scrum);
  //arrow right
  canvas_arrow(w/2+5 +30 , y3_line-20-6, x2_box -10, y3_line-20-6, text_color, ct_scrum);
    
  }
  
  function draw_ventas(w, h){
  var size = w/25;
   ct_ventas.font = size+"px Calibri";   
   ct_ventas.fillStyle = "#FFFFFF"; //black
   ct_ventas.fillRect (0, 0, w, h);
  var ellipse_h = w/2;
  var ellipse_w = w/4 - 5;
  
  var x_ellipse = w/10+5;
  var gradient = ct_ventas.createLinearGradient(0, 0, 0, ellipse_h);
  gradient.addColorStop(0, '#EDDAB3'); 
  gradient.addColorStop(1, '#F4E5C7'); 

  var y_ellipse = w/3;
  
  ct_ventas.textAlign = "center";
  
  var text_color = "#333333";
  
  var y1_text = w/3;
  var x1_text = w/9;
  
  ct_ventas.fillStyle = gradient;
  //ct_scrum.fillRect (x_box, y1_box, box_w , box_h);
  bezierCurve(x_ellipse, y_ellipse, ellipse_w, ellipse_h, ct_ventas);
  ct_ventas.fillStyle = text_color; 
  ct_ventas.fillText("Taller", x1_text, y1_text );

  var centerX1 = w/ 2;
  var radius = w/10-2;//70
  
  var centerY1 = y_ellipse;
  
  //circle
  ct_ventas.beginPath();
  ct_ventas.arc(centerX1, centerY1, radius, 0, 2 * Math.PI, false);
  ct_ventas.fillStyle = gradient;
  ct_ventas.fill();
  //text circle
  ct_ventas.fillStyle = text_color;
  ct_ventas.fillText("Almacen", centerX1, centerY1+5);
  
  var centerX2 = w-w/8;
  var centerY2 = y_ellipse - w/5 -10;
   //circle
  ct_ventas.beginPath();
  ct_ventas.arc(centerX2, centerY2, radius, 0, 2 * Math.PI, false);
  ct_ventas.fillStyle = gradient;
  ct_ventas.fill();
  //text circle
  ct_ventas.fillStyle = text_color;
  ct_ventas.fillText("Tienda #1", centerX2, centerY2+5);
  
  var centerY3 = y_ellipse;
   //circle
  ct_ventas.beginPath();
  ct_ventas.arc(centerX2, centerY3, radius, 0, 2 * Math.PI, false);
  ct_ventas.fillStyle = gradient;
  ct_ventas.fill();
  //text circle
  ct_ventas.fillStyle = text_color;
  ct_ventas.fillText("Tienda #2", centerX2, centerY3+5);
  
  var centerY4 = y_ellipse + 2*radius+15;
   //circle
  ct_ventas.beginPath();
  ct_ventas.arc(centerX2, centerY4, radius, 0, 2 * Math.PI, false);
  ct_ventas.fillStyle = gradient;
  ct_ventas.fill();
  //text circle
  ct_ventas.fillStyle = text_color;
  ct_ventas.fillText("Tienda #3", centerX2, centerY4+5);
  
  //arrow circle
  canvas_arrow(x_ellipse + ellipse_w/2, y_ellipse, centerX1 - radius, y_ellipse, text_color, ct_ventas);
  //arrow tienda 2
  canvas_arrow(centerX1 + radius, y_ellipse, centerX2 - radius, y_ellipse, text_color, ct_ventas);
  
  //arrow tienda 1
  canvas_arrow(centerX1 + radius, y_ellipse, centerX2 - radius, centerY2, text_color, ct_ventas);
  //arrow tienda 3
  canvas_arrow(centerX1 + radius, y_ellipse, centerX2 - radius, centerY4, text_color, ct_ventas);
  
  //arrow tienda 1-2
  canvas_arrow_bidirectional(centerX2, centerY2 + radius-5, centerX2, centerY3 - radius+5, text_color, ct_ventas);
  
  //arrow tienda 2-3
  canvas_arrow_bidirectional(centerX2, centerY3 + radius-5, centerX2, centerY4 - radius+5, text_color, ct_ventas);
  
  
  }
  
  function draw_organigrama(w, h){
	var size = 12; //w/25;
	console.log("w"+w);
	ct_organigrama.font = size+"px Calibri"; 
    ct_organigrama.textAlign = "center";  
    var text_color = "#FFFFFF";
	var line_color = "#3B6291";
	var box_color = "#C00000";
	
	var box_h = 50; //w/6;
    var box_w = 124; //w/3 + 25;    
	var space_x = 8; //w/40;
	var space_y = 25;
	
	var x1 = w/2;
	var y1 = box_h + 5;	
	var x2 = x1 - space_x/2;
	var y2 = y1 + space_y + box_h/2;	
	var x3 = x2 + space_x;
	var y3 = y2;	
	var x4 = x2 - box_w - space_x - box_w/2;
	var yn = y1 + space_y + space_y/2 + box_h;
	var y4 = yn + space_y/2;	
	var x5 = x2 - box_w/2;
	var y5 = y4;	
	var x6 = x3 + box_w/2;
	var y6 = y4;	
	var x7 = x6 + box_w + space_x;
	var y7 = y4;
	
	ct_organigrama.fillStyle = "#FFFFFF"; //white
    ct_organigrama.fillRect (0, 0, w, h);
   
    
	line(x1, y1, x1 ,yn, line_color, ct_organigrama);
	line(x2, y2, x3, y3, line_color, ct_organigrama);
	line(x4, yn, x7, yn, line_color, ct_organigrama);
	line(x4, yn, x4, y4, line_color, ct_organigrama);
	line(x5, yn, x5, y5, line_color, ct_organigrama);
	line(x6, yn, x6, y6, line_color, ct_organigrama);
	line(x7, yn, x7, y7, line_color, ct_organigrama);
	rect(x1 - box_w/2, y1 - box_h, box_w, box_h, box_color, "Gerente General", text_color, size, ct_organigrama);
	rect_only(x2 - box_w, y2 - box_h/2, box_w, box_h, box_color, ct_organigrama);
	rect_text(x2 - box_w, y2 - box_h/2+box_h/2, box_w, box_h, "Gerente Marketing y", text_color, size, ct_organigrama);
	rect_text(x2 - box_w, y2 - box_h/2+box_h/2+15, box_w, box_h, "Ventas", text_color, size, ct_organigrama);
    rect(x3, y3 - box_h/2, box_w, box_h, box_color, "Consultor", text_color, size, ct_organigrama);
	rect(x4 - box_w/2, y4, box_w, box_h, box_color, "Programador1", text_color, size, ct_organigrama);
	rect(x5 - box_w/2, y5, box_w, box_h, box_color, "Programador2", text_color, size, ct_organigrama);
    rect(x6 - box_w/2, y6, box_w, box_h, box_color, "Programador3", text_color, size, ct_organigrama);  
    rect(x7 - box_w/2, y7, box_w, box_h, box_color, "Diseñador", text_color, size, ct_organigrama);
  }
  
  function rect(x, y, w, h, color, text, text_color, font_size, context){
    context.font = font_size+"px Calibri"; 
    context.textAlign = "center";
	
	context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 10;
    context.shadowColor = "DarkRed";
	
	context.fillStyle = color;
    context.fillRect (x, y, w , h);  
    context.fillStyle = text_color;
	var x_text = x + (w - text.length)/2 + 7;
	var y_text = y + h/2 + 5;
    context.fillText(text, x_text, y_text);	
  }
  
  function rect_text(x, y_text, w, h, text, text_color, font_size, context){
    context.font = font_size+"px Calibri"; 
    context.textAlign = "center";
	context.fillStyle = text_color;
	var x_text = x + (w - text.length)/2 + 9;
    context.fillText(text, x_text, y_text);	
  }
  
  function rect_only(x, y, w, h, color, context){
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 10;
    context.shadowColor = "DarkRed";
	
	context.fillStyle = color;
    context.fillRect (x, y, w , h);
  }
  
  function line(fromx, fromy, tox, toy, color, context){
    context.beginPath();
    context.strokeStyle=color;
    context.lineWidth=2;
	context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
	context.stroke();
  }
  
  function canvas_arrow(fromx, fromy, tox, toy, color, context){
    var headlen = 10;   // length of head in pixels
	
    var angle = Math.atan2(toy-fromy,tox-fromx);
    context.beginPath();
    context.strokeStyle=color;
    context.lineWidth=2;
   
	context.moveTo(fromx, fromy);
    context.lineTo(tox-1, toy);
    context.lineTo(tox-headlen*Math.cos(angle-Math.PI/6),toy-headlen*Math.sin(angle-Math.PI/6));
    context.moveTo(tox, toy);
    
	context.lineTo(tox-headlen*Math.cos(angle+Math.PI/6),toy-headlen*Math.sin(angle+Math.PI/6));
	
	context.stroke();
 }
 function canvas_arrow_bidirectional(fromx, fromy, tox, toy, color, context){
    var headlen = 10;   // length of head in pixels
	
    var angle = Math.atan2(toy-fromy,tox-fromx);
    context.beginPath();
    context.strokeStyle=color;
    context.lineWidth=2;
   
	context.moveTo(fromx, fromy);
	context.lineTo(fromx-headlen*Math.cos(-angle+Math.PI/6),fromy-headlen*Math.sin(-angle+Math.PI/6));
    context.moveTo(fromx, fromy)
	context.lineTo(fromx-headlen*Math.cos(-angle-Math.PI/6),fromy-headlen*Math.sin(-angle-Math.PI/6));
	
	context.moveTo(fromx, fromy);
    context.lineTo(tox-1, toy);
    context.lineTo(tox-headlen*Math.cos(angle-Math.PI/6),toy-headlen*Math.sin(angle-Math.PI/6));
    context.moveTo(tox, toy);
    
	context.lineTo(tox-headlen*Math.cos(angle+Math.PI/6),toy-headlen*Math.sin(angle+Math.PI/6));
	
	context.stroke();
 }
  
  // bezier curve util function for ellipses  
    function bezierCurve(centerX, centerY, width, height, con) {
        con.beginPath();
        con.moveTo(centerX, centerY - height / 2);
        
        con.bezierCurveTo(
            centerX + width / 2, centerY - height / 2,
            centerX + width / 2, centerY + height / 2,
            centerX, centerY + height / 2
        );
        con.bezierCurveTo(
            centerX - width / 2, centerY + height / 2,
            centerX - width / 2, centerY - height / 2,
            centerX, centerY - height / 2
        );
        
        //con.fillStyle = 'white';
        con.fill();
        con.closePath();
    }
	
	
});