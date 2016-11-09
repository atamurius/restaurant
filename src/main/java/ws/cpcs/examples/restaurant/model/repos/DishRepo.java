package ws.cpcs.examples.restaurant.model.repos;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.Description;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import ws.cpcs.examples.restaurant.model.entities.Dish;
import ws.cpcs.examples.restaurant.model.entities.DishWithCategory;

@RepositoryRestResource(
        collectionResourceDescription = @Description("Dishes"),
        path = "dishes",
        excerptProjection = DishWithCategory.class
)
public interface DishRepo extends JpaRepository<Dish,Long> {

    Page<Dish> findByCategoryId(Long id, Pageable page);
}
