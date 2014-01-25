package com.web;

import java.io.IOException;
import java.util.Properties;

import com.google.sitebricks.Show;
import com.google.sitebricks.http.Post;
import com.model.Contacto;
import com.util.Mail;
import com.util.Utilities;

@Show("en/contact.html")
public class Contact {
	private Contacto contacto = new Contacto();
	private String cssClass = "";
	private String msg = "";
	
	@Post
	public void enviarCorreo() {
		if(contacto.getVerificacion() == null){
			cssClass = "error";
			msg = "All fields are required";
			return;
		}
		if(contacto.getVerificacion()!=5){
			cssClass = "error";
			msg = "All fields are required";
			return;
		}
		if(!validate()){
			cssClass = "error";
			msg = "All fields are required";
			return;
		}
		
		Properties props = new Properties();
        try {
			props.load(new Mail().getClass().getResourceAsStream("/app.properties"));
		} catch (IOException e) {
			e.printStackTrace();
		}
        
		String mensaje = "<b>Email:</b> "+contacto.getEmail()+
						"<br/><b>Nombre:</b> "+contacto.getNombre()+
						"<br/><b>Telefono:</b> "+contacto.getTelefono()+
						"<br/><b>Titulo:</b> "+contacto.getTitulo()+
						"<br/><b>Mensaje:</b><br/> "+contacto.getMensaje();
		if(Mail.sendMessage(mensaje, Utilities.getTruncated(contacto.getMensaje(), 100), props.getProperty("sendEmailTo"), null, null)){
			cssClass = "success";
			msg = "Message successfully sent";
		}else{
			cssClass = "error";
			msg = "Failed to send, please try again";
		}		
	}
	public Contacto getContacto() {
		return contacto;
	}
	public void setContacto(Contacto contacto) {
		this.contacto = contacto;
	}
	public String getCssClass() {
		return cssClass;
	}
	public String getMsg() {
		return msg;
	}
	private boolean validate(){
		boolean e = !"".equals(contacto.getEmail().trim());
		boolean m = !"".equals(contacto.getMensaje().trim());
		boolean n = !"".equals(contacto.getNombre().trim());
		return e && m && n;
	}
}
