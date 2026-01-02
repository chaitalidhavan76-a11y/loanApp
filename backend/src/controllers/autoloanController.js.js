import AutoLoan from "../models/AutoLoan";

// Submit a new autoloan from applications;
//routes POST/API/applications
//Private (must be logged in);

export const createAutoloan = async (res,res) =>{
    try{
        const{
            fullName,
            email,
            phone,
            vehicleType,
            vehiclePrice,
            loanAmount,

        } = req.body;

        //create applications
        const autoloan = await AutoLoan.create({
            userId: req.user._id,
            loanType: "auto",
             fullName,
            email,
            phone,
            vehicleType,
            vehiclePrice,
            loanAmount,


        });

        res.status(201).json({
            success: true,
            message: "Home loan application submitted successfully!",
            data: application,
        });
       }   catch (error) {
            console.error("Error creating application:", error);
            res.status(500).json({
              success: false,
              message: "Failed to submit application",
              error: error.message,
            });   
    }
};

// @desc    Get all my auto loan applications
// @route   GET /api/applications
// @access  Private

export const getMyAutoloan = async (req,res) =>{
    try {
        const autoloan = await Application.find({
            userId: req.user._id,
            loanType: "auto"
        }).sort({ cratedAt: -1 });

        res.status(200).json({
            success: true,
            count: autoloan.length,
            data: autoloan,
        });
    }catch (error){
        console.log("error fetching applications:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch applications",
            error: error.message,
        });
    }
};
// @desc    Get single application by ID
// @route   GET /api/applications/:id
// @access  Private

export const getLoanById = async (req, res) =>{
     try{
        const autoloan = await Application.findById(req.params.id);

        if(!application){
            return res.status(404).json({
                success: false,
                message: "Application not found",
            });
        }

        //Check if user owns this application
        if(application.userId.toString() !== req.user._id.toString()){
            return res.status(403).json({
                success: false,
                message: "not authorized to access this application",
            });
        }
        res.status(200).json({
            success: true,
            data: application,
        });
     }catch (error){
        console.error("Error fetching application:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch application",
            error: error.message,
        });
     }
};
// @desc    Update application (only if pending)
// @route   PUT /api/applications/:id
// @access  Private

export const updateLoanApplication = async(req, res) => {
   try{
    const application = await Application.findById(req.params.id);

    if(!application){
        return res.status(404).json({
            success: false,
            message: "Application not found",
        });
    }
   
   //Only allow update if the status is pending
   if(application.status !== "pending"){
    return res.status(400).json({
        success: false,
        message: "Cannot update application that is under review",
    });
   }

   //Update fields
   const allowedUpdate = [
    "fullName",
    "email",
    "phone",
    vehicleType,
            vehiclePrice,
            loanAmount,

   ]

}
}


