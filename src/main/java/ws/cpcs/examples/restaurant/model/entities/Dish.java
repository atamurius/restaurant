package ws.cpcs.examples.restaurant.model.entities;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
public class Dish extends AbstractEntity {

    @NotEmpty
    private String title;

    private String description;

    private double price;

    @NotNull @ManyToOne
    private Category category;

    public Dish() { }

    public Dish(String title, String description, double price, Category category) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.category = category;
    }

    // accessors ----------------------------

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
