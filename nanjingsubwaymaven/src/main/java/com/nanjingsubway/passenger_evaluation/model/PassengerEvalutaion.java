package com.nanjingsubway.passenger_evaluation.model;

public class PassengerEvalutaion {
	private Integer id = null;
	/** ³Ë¿ÍId */
	private Integer passengerId = null;
	/** ¹ºÂòµØÌúÆ±µÄId */
	private Integer buyTicketId = null;
	private String evaluationStars = null;
	private String evaluationContent = null;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getPassengerId() {
		return passengerId;
	}
	public void setPassengerId(Integer passengerId) {
		this.passengerId = passengerId;
	}
	public Integer getBuyTicketId() {
		return buyTicketId;
	}
	public void setBuyTicketId(Integer buyTicketId) {
		this.buyTicketId = buyTicketId;
	}
	public String getEvaluationStars() {
		return evaluationStars;
	}
	public void setEvaluationStars(String evaluationStars) {
		this.evaluationStars = evaluationStars;
	}
	public String getEvaluationContent() {
		return evaluationContent;
	}
	public void setEvaluationContent(String evaluationContent) {
		this.evaluationContent = evaluationContent;
	}
	public PassengerEvalutaion() {
		super();
	}
	public PassengerEvalutaion(Integer passengerId, Integer buyTicketId, String evaluationStars,
			String evaluationContent) {
		super();
		this.passengerId = passengerId;
		this.buyTicketId = buyTicketId;
		this.evaluationStars = evaluationStars;
		this.evaluationContent = evaluationContent;
	}
	public PassengerEvalutaion(Integer id, Integer passengerId, Integer buyTicketId, String evaluationStars,
			String evaluationContent) {
		super();
		this.id = id;
		this.passengerId = passengerId;
		this.buyTicketId = buyTicketId;
		this.evaluationStars = evaluationStars;
		this.evaluationContent = evaluationContent;
	}
	
}
