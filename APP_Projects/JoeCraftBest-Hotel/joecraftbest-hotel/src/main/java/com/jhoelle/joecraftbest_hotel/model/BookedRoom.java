import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter;
@AllArgsConstructor
@NoArgsConstructor
public class BookedRoom {
    @Id
    @GeneratedValue(Strategy = GenerationType.IDENTITY);

    private Long bookingId;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    @SuppressWarnings("unused")
    private String guestFullName;
    private String guestEmail;
    private int NumOfAdults;
    private int NumOfChildren;
    private int totalNumOfGuest;
    private String bookingConfirmtionCode;
    private Room room;
    
    public void calculateTotalNumberGuest(){
        this.totalNumOfGuest = this.NumOfAdults + NumOfChildren;

    }

    public void setNumOfAdults(int NumOfAdults) {
        NumOfAdults = NumOfAdults;
        calculateTotalNumberGuest();
    }

    /**
     * @param NumOfChildren
     */
    public void setNumOfChildren(int NumOfChildren) {
        NumOfChildren = NumOfChildren;
        calculateTotalNumberGuest();

    }

    /**
     * @param bookingConfirmationCode
     */
    public BookedRoom(String bookingConfirmationCode) {

        this.bookingConfirmationCode = bookingConfirmationCode;
    }



}
