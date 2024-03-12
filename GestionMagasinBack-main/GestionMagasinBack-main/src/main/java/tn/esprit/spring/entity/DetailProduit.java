package tn.esprit.spring.entity;



import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@JsonIgnoreProperties(value= {"handler","hibernateLazyInitializer","FieldHandler"})
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class DetailProduit implements Serializable {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	
	private Long idDetailProduit; // Clé primaire
	@Temporal (TemporalType.DATE)
	private Date dateCreation;
	@Temporal (TemporalType.DATE)
	private Date dateDerniereModification;
	@Enumerated (EnumType.STRING)
	private CategorieProduit categorieProduit ;
	
	enum CategorieProduit{
		ELECTOMENAGER,
		ALIMENTAIRE,
		QUINCAILLERIE
	}
	

@OneToOne(mappedBy="detailProduit")
@JsonIgnore
private Produit produit;

}
