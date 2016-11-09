package ws.cpcs.examples.restaurant.model.entities;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "full", types = Dish.class)
public interface DishWithCategory {

    String getTitle();
    String getDescription();
    String getPrice();
    @Value("#{target.category.name}")
    String getCategory();
}
