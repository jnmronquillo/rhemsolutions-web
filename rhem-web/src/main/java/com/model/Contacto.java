package com.model;

public class Contacto {
	private String nombre;
  	private String email;
  	private String mensaje;
  	private Integer verificacion;
  
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMensaje() {
		return mensaje;
	}
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	public Integer getVerificacion() {
		return verificacion;
	}
	public void setVerificacion(Integer verificacion) {
		this.verificacion = verificacion;
	}
  
}
