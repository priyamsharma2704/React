var builder = WebApplication.CreateBuilder(args);

//Register Service / reference the controllers
builder.Services.AddControllers();

var app = builder.Build();

//config the HTTP req pipelines
if(app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}


app.UseRouting();

app.UseEndpoints(endpoints =>{
    endpoints.MapControllers();
});

app.Run();
