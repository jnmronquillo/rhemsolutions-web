package com.config;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.servlet.GuiceServletContextListener;
import com.google.sitebricks.SitebricksModule;
import com.web.Contact;
import com.web.Contactenos;

public class AppConfig extends GuiceServletContextListener {

	@Override
	protected Injector getInjector() {
		return Guice.createInjector(new SitebricksModule(){
			@Override
	        protected void configureSitebricks() {
	            // scan class Example's package and all descendants
//	            scan(Contactenos.class.getPackage());
				at("/contactenos").show(Contactenos.class);
				at("/en/contact").show(Contact.class);
	        }
		});
	}

}