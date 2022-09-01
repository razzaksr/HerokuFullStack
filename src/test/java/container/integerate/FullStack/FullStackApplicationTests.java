package container.integerate.FullStack;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNotSame;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertSame;
import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertLinesMatch;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
class FullStackApplicationTests {
	
	@MockBean
	TelevisionInterface repo;
	
	@Autowired
	TelevisionService service;
	
	@Test
	public void testingAllTypes() {
		String t1="AlphaX";
		String t2="CosmoV";
		String t3="DeltaSean";
		String t4="Vict45";
		
		List<String> check1=Stream.of(t1,t2,t3).collect(Collectors.toList());
		List<String> check2=Stream.of(t2,t3,t4).collect(Collectors.toList());
		List<String> check3=Stream.of(t3,t1,t4).collect(Collectors.toList());
		List<String> check4=Stream.of(t1,t3,t4).collect(Collectors.toList());
		
		when(repo.findAllByTypes("FHD")).thenReturn(Stream.of(t1,t3,t4).collect(Collectors.toList()));
		
		//assertLinesMatch(check1, service.makeFetchByTypes("FHD"));
		//assertLinesMatch(check2, service.makeFetchByTypes("FHD"));
		//assertLinesMatch(check3, service.makeFetchByTypes("FHD"));
		assertLinesMatch(check4, service.makeFetchByTypes("FHD"));
	}
	
	@Test
	public void testingAllBrandInch() {
		Television t1=new Television(12, "alphaX", "LG", "UHD", 24.5, 41900);
		Television t2=new Television(87, "DeltaCG", "Samsung", "FHD", 24.5, 31900);
		Television t3=new Television(123, "alphaX", "Micromax", "HD", 24.5, 14900);
		Television t4=new Television(9, "MegaX", "TCL", "3D", 44.5, 31900);
		
		when(repo.findAllByBrandAndInches("alphaX",24.5)).thenReturn(Stream.of(t1,t3).collect(Collectors.toList()));
		
		assertNotSame(t2, service.makeFetchByBrandInch("alphaX", 24.5).get(0));
	}
	
	@Test
	public void testingAllByCost() {
		Television t1=new Television(12, "alphaX", "LG", "UHD", 34.5, 41900);
		Television t2=new Television(87, "DeltaCG", "Samsung", "FHD", 24.5, 31900);
		Television t3=new Television(123, "TountX", "Micromax", "HD", 24.5, 14900);
		Television t4=new Television(9, "MegaX", "TCL", "3D", 44.5, 31900);
		
		when(repo.findAllByCost(31900)).thenReturn(Stream.of(t2,t4).collect(Collectors.toList()));
		
		assertNotEquals(t4, service.makeReadCost(31900).get(0));
	}
	
	@Test
	public void testingDelete() {
		Television t1=new Television(12, "alphaX", "LG", "UHD", 34.5, 41900);
		repo.delete(t1);
		verify(repo, times(1)).delete(t1);
	}
	
	
	@Test
	public void testingRead() {
		Optional<Television> t1=Optional.of(new Television(12, "alphaX", "LG", "UHD", 34.5, 41900));
		Optional<Television> t2=Optional.of(new Television(87, "DeltaCG", "Samsung", "FHD", 24.5, 31900));
		
		when(repo.findById(12)).thenReturn(t1);
		when(repo.findById(87)).thenReturn(t2);
		
		assertEquals(t2, service.makeRead(87));
		
		assertTrue(service.makeRead(12).get().getType().equals(t1.get().getType()));
	}
	
	@Test
	public void testingCreate() {
		Television t1=new Television(12, "alphaX", "LG", "UHD", 34.5, 41900);
		Television t2=new Television(87, "DeltaCG", "Samsung", "FHD", 24.5, 31900);
		
		when(repo.save(t1)).thenReturn(t1);
		when(repo.save(t2)).thenReturn(t2);
		
		//assertTrue(service.makeNewOne(t1).getBrand().equals("LG"));
		assertNotNull(service.makeNewOne(t2).getModel());
	}
	
	@Test
	public void testingAll() {
		Television t1=new Television(12, "alphaX", "LG", "UHD", 34.5, 41900);
		Television t2=new Television(87, "DeltaCG", "Samsung", "FHD", 24.5, 31900);
		Television t3=new Television(123, "TountX", "Micromax", "HD", 24.5, 14900);
		Television t4=new Television(9, "MegaX", "TCL", "3D", 44.5, 31899);
		Television t5=null;
		
		
		when(repo.findAll()).thenReturn(Stream.of(t1,t2,t3,t4,t5).collect(Collectors.toList()));
		
		assertSame(5, service.makeFetchAll().size());
		assertNull(service.makeFetchAll().get(4));
	}


	@Test
	void contextLoads() {
	}

}
