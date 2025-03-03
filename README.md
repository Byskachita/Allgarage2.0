<h1>Allgarage</h1>

<strong>
Allgarage.cl es una página web creada para un taller mécanico ubicado en Av. Isabel Riquelme #2546 - Pedro Aguirre Cerda, Santiago de Chile.
</strong>
Este repositorio corresponde a la versión 2.0 del diseño. En el cual se modifican los wireframes las vistas, se mejoran títulos e información en general, se modifican algunas fotos y se agregan los nuevos servicios.
<br>

```mermaid
graph TB
    User((Website User))
    
    subgraph "Frontend Container"
        WebUI["Web Interface<br>(HTML/CSS)"]
        
        subgraph "Frontend Components"
            NavComponent["Navigation Component<br>(Bootstrap)"]
            FormComponent["Contact Form<br>(HTML/JS)"]
            CarouselComponent["Image Carousel<br>(Bootstrap)"]
            MediaQueries["Media Queries<br>(CSS)"]
            Analytics["Analytics<br>(Google Tag Manager)"]
        end
    end
    
    subgraph "Backend Container"
        PHPMailer["Email Service<br>(PHPMailer)"]
        
        subgraph "Email Components"
            SMTPHandler["SMTP Handler<br>(PHPMailer)"]
            EmailValidator["Email Validator<br>(PHPMailer)"]
            ErrorHandler["Error Handler<br>(PHP)"]
        end
    end
    
    subgraph "Static Assets Container"
        Assets["Asset Storage<br>(File System)"]
        
        subgraph "Asset Components"
            Images["Image Assets<br>(JPG/PNG/SVG)"]
            Styles["CSS Stylesheets<br>(CSS)"]
            Scripts["JavaScript Files<br>(JS)"]
        end
    end
    
    subgraph "Server Container"
        Apache["Web Server<br>(Apache)"]
        
        subgraph "Server Components"
            URLRewriter["URL Rewriter<br>(mod_rewrite)"]
            StaticFileHandler["Static File Handler<br>(Apache)"]
        end
    end

    %% Frontend Relationships
    User -->|"Accesses"| WebUI
    WebUI -->|"Uses"| NavComponent
    WebUI -->|"Uses"| FormComponent
    WebUI -->|"Uses"| CarouselComponent
    WebUI -->|"Applies"| MediaQueries
    WebUI -->|"Tracks via"| Analytics

    %% Backend Relationships
    FormComponent -->|"Submits to"| PHPMailer
    PHPMailer -->|"Uses"| SMTPHandler
    PHPMailer -->|"Validates with"| EmailValidator
    PHPMailer -->|"Handles errors via"| ErrorHandler

    %% Asset Relationships
    WebUI -->|"Loads from"| Assets
    Assets -->|"Serves"| Images
    Assets -->|"Serves"| Styles
    Assets -->|"Serves"| Scripts

    %% Server Relationships
    Apache -->|"Manages"| URLRewriter
    Apache -->|"Handles"| StaticFileHandler
    URLRewriter -->|"Processes"| WebUI
    StaticFileHandler -->|"Serves"| Assets
```
