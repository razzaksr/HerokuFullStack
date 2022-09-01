package container.integerate.FullStack;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TelevisionInterface extends JpaRepository<Television, Integer>{
	public Optional<Television> findByBrand(String brand);
	public List<Television> findAllByCost(int cost);
	
	@Transactional	// in order to update/ delete based custom condition  
	@Modifying// in order to update/ delete based custom condition
	@Query("delete from Television where type like %:own%")
	public void deleteAllByCustomize(String own);
	
	@Query("select model from Television where type like %:tp%")
	public List<String> findAllByTypesLike(String tp);
	
	// cost=cost*1.5		>> increase cost by 50%
	// cost=cost*0.5		>> decrease cost by 50%
	
	// also return type should be void or int
	@Transactional	// in order to update/ delete based custom condition  
	@Modifying// in order to update/ delete based custom condition
	// Query alone is not enough
	@Query("update Television set cost=cost*0.500 where brand=:bnd")
	public void updatePriceByBrand(String bnd); 
	
	@Query("from Television where brand=:bnd and inches>=:in")
	public List<Television> findAllByBrandAndInches(String bnd,double in);
	
	@Query("select brand from Television where type=:tp")
	public List<String> findAllByTypes(String tp);
}
