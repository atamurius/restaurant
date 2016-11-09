package ws.cpcs.examples.restaurant.model.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.Description;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import ws.cpcs.examples.restaurant.model.entities.Category;

@RepositoryRestResource(
        collectionResourceDescription = @Description("Dish categories"),
        collectionResourceRel = "categories",
        path = "categories"
)
public interface CategoryRepo extends JpaRepository<Category,Long> {
}
