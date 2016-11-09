package ws.cpcs.examples.restaurant;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import ws.cpcs.examples.restaurant.model.entities.Category;
import ws.cpcs.examples.restaurant.model.entities.Dish;
import ws.cpcs.examples.restaurant.model.repos.CategoryRepo;
import ws.cpcs.examples.restaurant.model.repos.DishRepo;

import javax.transaction.Transactional;

import static java.util.Arrays.asList;

@Component
public class TestDataCommand implements CommandLineRunner {

    static final Logger log = LoggerFactory.getLogger(TestDataCommand.class);

    @Autowired
    CategoryRepo categoryRepo;

    @Autowired
    DishRepo dishRepo;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        if (asList(args).contains("test-data")) {
            log.info("Creating test data...");

            Category mainDishes = categoryRepo.save(new Category("Main dishes"));
            Category salads = categoryRepo.save(new Category("Salads"));
            Category deserts = categoryRepo.save(new Category("Deserts"));

            create(10,
                    new Dish("Cesar",       "Delicious Cesar salad with fresh tomato",  22.50, salads),
                    new Dish("Fresh salad", "Salad with fresh tomato and onion",        15.90, salads));
            create(10,
                    new Dish("Pork steak",  "Pork steak with potato and cabbage",       55.90, mainDishes),
                    new Dish("Pasta neapolitana", "Pasta with white sous",              30.50, mainDishes),
                    new Dish("Pizza diabolo", "Hot and spicy pizza",                    28.80, mainDishes));
            create(10,
                    new Dish("Napoleon",    "Delicious cake with milk",                 25.50, deserts),
                    new Dish("Ice cream",   "Ice cream with different flavors",         17.20, deserts));
        }
    }

    private void create(int count, Dish... dishes) {
        for (int i = 1; i <= count; i++) {
            for (Dish dish: dishes) {
                String name = dish.getTitle();
                Dish d = new Dish(name + " #"+ i, dish.getDescription(), dish.getPrice(), dish.getCategory());
                dishRepo.save(d);
            }
        }
    }
}
