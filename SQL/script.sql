-- Creación de la tabla Estado
CREATE TABLE State (
    id INT AUTO_INCREMENT PRIMARY KEY,
    state_name VARCHAR(255) NOT NULL
);

-- Creación de la tabla Usuarios
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    pwd VARCHAR(600) NOT NULL,
    rol VARCHAR(50) NOT NULL,
    area VARCHAR(30) NOT NULL
);

-- Creación de la tabla Orden de Trabajo    
CREATE TABLE WorkOrder (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    project_name VARCHAR(500) NOT NULL,
    description VARCHAR(1000),
    deadline_state DATE,
    delivery_date DATE,
    state_id INT,
    FOREIGN KEY (state_id) REFERENCES State(id)
);

-- Creación de la tabla Comentarios
CREATE TABLE Comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    work_order_id INT,
    date_time DATETIME NOT NULL,
    text VARCHAR(1000) NOT NULL,
    creator_user_id INT,
    FOREIGN KEY (work_order_id) REFERENCES WorkOrder(id),
    FOREIGN KEY (creator_user_id) REFERENCES Users(id)
);

-- Creación de la tabla UsuariosAsignados
CREATE TABLE AssignedUsers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    work_order_id INT,
    user_id INT,
    FOREIGN KEY (work_order_id) REFERENCES WorkOrder(id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);