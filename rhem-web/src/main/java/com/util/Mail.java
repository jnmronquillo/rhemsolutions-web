package com.util;

import java.io.IOException;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.FileDataSource;
import javax.mail.Address;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

public class Mail {
	
	public static boolean sendMessage(String text,String subject, String correo,String fileFullName, String fileName){
        boolean rpta=false;
        Properties props = new Properties();
        try {
			props.load(new Mail().getClass().getResourceAsStream("/mail.properties"));
		} catch (IOException e) {
			e.printStackTrace();
		}
        // Nombre del host de correo, es smtp.gmail.com
//        props.setProperty("mail.smtp.host", "smtp.gmail.com");
        // TLS si esta disponible
//        props.setProperty("mail.smtp.starttls.enable", "true");
        // Puerto de gmail para envio de correos
//        props.setProperty("mail.smtp.port","587");
        // Cuenta de correo en gmail
//        props.setProperty("mail.smtp.user", "sistema@rhemsolutions.com");
        // Si requiere o no usuario y password para conectarse.
//        props.setProperty("mail.smtp.auth", "true");
        Session session = Session.getDefaultInstance(props);
        //Verficiar el envio
        session.setDebug(true);
        MimeMessage  message = new MimeMessage(session);
        try {
            message.setSubject(subject);	           
          
            if(fileName != null && fileFullName != null){
	            BodyPart texto = new MimeBodyPart();
	            texto.setText(text);
	            
	            BodyPart adjunto = new MimeBodyPart();
	            adjunto.setDataHandler(new DataHandler(new FileDataSource(fileFullName)));
	            
	            String[] name_arr = fileName.split("/");	            
	            adjunto.setFileName(name_arr[1]);
	            
	            MimeMultipart multiParte = new MimeMultipart();

	            multiParte.addBodyPart(texto);
	            multiParte.addBodyPart(adjunto);
	            message.setContent(multiParte);
            }else{
            	message.setText(text, "utf-8", "html");
            }
            //Address address = new InternetAddress("NombrePersona");
            //message.setFrom(address);
            //La direccion de la persona a enviar
            Address address2 = new InternetAddress(correo,false);
            message.addRecipient(Message.RecipientType.TO,address2);
            Transport t = session.getTransport("smtp");
            t.connect(props.getProperty("mail.user"), props.getProperty("mail.password"));
            t.sendMessage(message,message.getAllRecipients());
            t.close();
            rpta=true;
        } catch (MessagingException ex) {
            ex.printStackTrace();
            return rpta;
        }
        return rpta;
	}
}
