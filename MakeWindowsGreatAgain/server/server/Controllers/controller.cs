using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace MyWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        // A static list to simulate a database for simplicity
        private static List<Product> products = new List<Product>
        {
            new Product { Id = 1, Name = "Laptop", Price = 1000 },
            new Product { Id = 2, Name = "Smartphone", Price = 500 }
        };

        // GET: api/products
        [HttpGet]
        public ActionResult<IEnumerable<Product>> Get()
        {
            return Ok(products);
        }

        // GET: api/products/{id}
        [HttpGet("{id}")]
        public ActionResult<Product> Get(int id)
        {
            var product = products.Find(p => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        // POST: api/products
        [HttpPost]
        public ActionResult<Product> Post([FromBody] Product newProduct)
        {
            newProduct.Id = products.Count + 1;
            products.Add(newProduct);
            return CreatedAtAction(nameof(Get), new { id = newProduct.Id }, newProduct);
        }

        // PUT: api/products/{id}
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Product updatedProduct)
        {
            var product = products.Find(p => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }

            product.Name = updatedProduct.Name;
            product.Price = updatedProduct.Price;

            return NoContent();
        }

        // DELETE: api/products/{id}
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var product = products.Find(p => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }

            products.Remove(product);
            return NoContent();
        }
    }

    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
    }

    public class FixWindows
    {
        TaskBar taskbar = new TaskBar();
        var location = taskBar.Location;
        var size = taskBar.Size;
        var widgetButton = taskBar.WidgetButton;
        var chatButton = taskkbar.ChatButton;
        var keyboardSwitcher = taskkbar.ShowKeyboardSwitcher;
    }

    public class TaskBar:FixWindows
    {
        public string Location
        {
            get; set;
        }

        public string Size
        {
            get; set;
        }

        public bool WidgetButton
        {
            get; set;
        }

        public bool ChatButton
        {
            get; set;
        }

        public bool ShowKeyboardSwitcher
        {
            get; set;
        }
    }
}
