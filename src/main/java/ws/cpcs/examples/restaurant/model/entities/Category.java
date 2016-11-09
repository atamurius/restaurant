package ws.cpcs.examples.restaurant.model.entities;

import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
public class Category extends AbstractEntity {

    @NotBlank
    private String name;

    @OneToMany(mappedBy = "category")
    private Set<Dish> dishes;

    public Category(String name) {
        this.name = name;
    }

    public Category() { }

    // accessors ----------------------------

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Dish> getDishes() {
        return dishes;
    }

    public void setDishes(Set<Dish> dishes) {
        this.dishes = dishes;
    }
}
