package container.integerate.FullStack;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class TelevisionExecutive {
	@Autowired
	TelevisionService service;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	ResourceService serv;
	
	@GetMapping("/askint")
	public int returnInt() {
		return 1200;
	}
	
	@PostMapping("/posting")
	public void readingByBody(@RequestBody Television tel) {
		System.out.println("Received as body "+tel);
	}
	
	@GetMapping("/pass/{alpha}/{beta}")
	public void readSome(@PathVariable("alpha") String alpha,@PathVariable("beta") int beta) {
		System.out.println("Received String is "+alpha+" and integer is "+beta);
	}
	
	@GetMapping("/haithere")
	public void saySome() {
		System.out.println("Backend called");
	}
	
	@PostMapping("/signup")
	public Resource signingUp(@RequestBody Resource resource) {
		String newone=encoder.encode(resource.getPassword());
		resource.setPassword(newone);
		return serv.implementSave(resource);
	}
	
	@DeleteMapping("/delall/{tp}")
	public List<String> callingDeleteMany(@PathVariable("tp") String tp){
		return service.makeDeleteCustom(tp);
	}
	
	@DeleteMapping("/delid/{pos}")
	public String callingDeleteId(@PathVariable("pos") int pos) {
		return service.makeDeleteKey(pos);
	}
	
	@PutMapping("/ups/{band}")
	public void callingUpdatePrice(@PathVariable("band") String band){
		service.makeUpdate(band);
	}
	
	@PutMapping("/up")
	public Television callingUpdate(@RequestBody Television tele) {
		return service.makeNewOne(tele);
	}
	
	@DeleteMapping("/del")
	public String callingMakeDelete(@RequestBody Television te) {
		return service.makeDelete(te);
	}
	
	@GetMapping("/bywhat/{west}")
	public List<String> callingFetchTypes(@PathVariable("west") String west){
		return service.makeFetchByTypes(west);
	}
	
	@GetMapping("/bytwo/{one}/{two}")
	public List<Television> callingFetchTwo(@PathVariable("one") String one,@PathVariable("two") double two){
		return service.makeFetchByBrandInch(one, two);
	}
	
	@GetMapping("/byprice/{value}")
	public List<Television> callingReadCost(@PathVariable("value") int value){
		return service.makeReadCost(value);
	}
	
	@GetMapping("/{hey}")
	public Optional<Television> callingRead(@PathVariable("hey") int hey){
		return service.makeRead(hey);
	}
	
	@GetMapping("/")
	public List<Television> callingTraverse(){
		return service.makeFetchAll();
	}
	
	@PostMapping("/new")
	public Television callingCreation(@RequestBody Television tel) {
		return service.makeNewOne(tel);
	}
}