<?php
    
    function get_connection (){
        $servername = "localhost:3307";
        $username = "root";
        $password = "root";
        $dbname = "cute_wars";
    
        $conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
            return false;
        } 
        return $conn;
    
    }
    function get_votes(){
        $conn = get_connection();
        $sql = "SELECT COUNT(*) AS 'amount', character_name FROM vote GROUP BY character_name ORDER BY character_name";
        $i = 0;
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
          
            while($row = $result->fetch_assoc()) {

                $votes[$i] = $row["amount"];
                $i = $i + 1;
            }
            echo "
                <character>
                    <baby_yoda>".$votes[0]."</baby_yoda>
                    <porg>".$votes[1]."</porg>
                </character>

            ";
        }
        $conn->close();

    }
    function vote_cutie($name){
        $conn = get_connection();
        $sql = "INSERT INTO vote (character_name) VALUES ('".$name."')";
        $result = $conn->query($sql);
        $conn->close();
    }
?>