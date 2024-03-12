package tn.esprit.spring.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.ColumnDefault;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.Nullable;

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
public class Facture  implements Serializable {
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	
	private Long idFacture; // Clé primaire
	private float montantRemise;
	private float montantFacture;
	@Temporal (TemporalType.DATE)
	private Date dateFacture;
	private Boolean active;
	
	
	@Nullable
	private Date createdAt;
	@Nullable
	private Date updatedAt;
	@Nullable
	private Boolean state;
	@Nullable
	private Date deleteAt;
	


	
	
	


	@ManyToOne
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	Client client;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy="facture")
	@JsonIgnore
	private List <DetailFacture> detailFacture;
	
	
	
}
