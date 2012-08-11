package com.util;

public class Utilities {

	public static String getTruncated(String str, int maxSize){
	    int limit = maxSize - 3;
	    return (str.length() > maxSize) ? str.substring(0, limit) + "..." : str;
	}
}
