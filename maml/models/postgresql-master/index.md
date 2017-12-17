# PostgreSQL Master

<img src="/img/postgresql-master/icon.png" width="128" align="left" style="margin-right: 8px;"/>

PostgreSQL administration tool.

Manage your PostgreSQL databases with ease like a master. It is extremely useful when you want to manage multiple databases or you want to have multiple connections to a single database. Each database connection is running in a separate tab. Even better, it remembers the connection URIs so you can connect to your databases by simply one click.

The app provides modern graphical interface. It includes a syntax highlighting SQL editor. You can also download tables and query results as CSV/JSON/XML.


### for macOS

<a href="https://transactions.sendowl.com/products/77696805/381564E2/purchase" rel="nofollow"><img src="https://transactions.sendowl.com/assets/external/buy-now.png" /></a><script type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js" ></script>


### for Windows

<a href="https://transactions.sendowl.com/products/77696811/B6BFA220/purchase" rel="nofollow"><img src="https://transactions.sendowl.com/assets/external/buy-now.png" /></a><script type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js" ></script>


### for Linux

<a href="https://transactions.sendowl.com/products/77696812/2F907201/purchase" rel="nofollow"><img src="https://transactions.sendowl.com/assets/external/buy-now.png" /></a><script type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js" ></script>


## Screenshots

<div id="main-carousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#main-carousel" data-slide-to="0" class="active"></li>
    <li data-target="#main-carousel" data-slide-to="1"></li>
    <li data-target="#main-carousel" data-slide-to="2"></li>
    <li data-target="#main-carousel" data-slide-to="3"></li>
    <li data-target="#main-carousel" data-slide-to="4"></li>
    <li data-target="#main-carousel" data-slide-to="5"></li>
  </ol>
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="/img/postgresql-master/0.png"/>
      <div class="carousel-caption">
        <h3>Run SQL query</h3>
      </div>
    </div>
    <div class="item">
      <img src="/img/postgresql-master/1.png"/>
      <div class="carousel-caption">
        <h3>Manage connection URIs</h3>
      </div>
    </div>
    <div class="item">
      <img src="/img/postgresql-master/2.png"/>
      <div class="carousel-caption">
        <h3>Rows and filter</h3>
      </div>
    </div>
    <div class="item">
      <img src="/img/postgresql-master/3.png"/>
      <div class="carousel-caption">
        <h3>Table structure</h3>
      </div>
    </div>
    <div class="item">
      <img src="/img/postgresql-master/4.png"/>
      <div class="carousel-caption">
        <h3>Query history</h3>
      </div>
    </div>
    <div class="item">
      <img src="/img/postgresql-master/5.png"/>
      <div class="carousel-caption">
        <h3>Explain query</h3>
      </div>
    </div>
  </div>
  <a class="left carousel-control" href="#main-carousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#main-carousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


## Features

- Multiple database connections, each in a separate tab
- Support connection via SSH tunnel
- Create and manage connection URIs, next time one click to connect
- Connect to local or remote databases
- Browse tables and table rows
- Get table details: structure, size, indexes, row count, constraints...etc
- Execute and analyze custom SQL queries
- Table and query data export to CSV/JSON/XML
- Query history
- Modern and beautiful UI
- Pagination and simple column filtering
- Support multiple schemas


## FAQ

- I have ecountered an error: "SSL is not enabled on the server"
    - You can append `?sslmode=disable` to the connection URI to solve the issue.
    - More information please read [http://www.postgresql.org/docs/9.5/static/libpq-connect.html#AEN42521](http://www.postgresql.org/docs/9.5/static/libpq-connect.html#AEN42521)
- Does the app support SSL tunnel?
    - Yes, it does. But the version sold on Mac App Store doesn't
    - A workaround for users who are running the Mac App Store version:
        - Run `ssh -Ng -L 5433:localhost:5432 ssh-username@ssh-server` in terminal.
        - Use the app to connect to `postgresql://pg-username:pg-password@localhost:5433/pg-dbname`.


## Questions & Support

Please contact [Customer Support](/contact/).
