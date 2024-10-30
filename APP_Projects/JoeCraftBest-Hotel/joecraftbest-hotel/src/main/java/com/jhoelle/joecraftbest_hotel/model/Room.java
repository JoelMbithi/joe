import java.math.BigDecimal;

public class Room {

    private Long id;
    private String roomType; 
    private BigDecimal roomPrice;
    private boolean isBooked = false;
    private List<BookedRoom> bookings;

    /**
     * 
     */
    public Room() {
        this.bookings = new ArrayList<>();
    }

}
