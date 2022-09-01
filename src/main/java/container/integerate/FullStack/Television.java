package container.integerate.FullStack;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Television {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="stock_id")
	private int tvId;
	@Column(name="stock_name")
	private String model;
	@Column(name="stock_type")
	private String type;
	@Column(name="stock_brand")
	private String brand;
	@Column(name="stock_size")
	private double inches;
	@Column(name="stock_cost")
	private int cost;
}
