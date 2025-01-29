<form id="property-filter-form" action="" method="POST" class="p-4 border rounded bg-light">
    <!-- Location Filter -->
    <div class="mb-3">
        <label for="city" class="form-label">Location</label>
        <select name="city" id="city" class="form-select">
            <option value="">All</option>
            <option value="Cushing">Cushing</option>
            <option value="Saint George">Saint George</option>
            <option value="Matinicus">Matinicus</option>
            <option value="Owls Head">Owls Head</option>
            <option value="Camden">Camden</option>
            <option value="South thomaston">South Thomaston</option>
            <option value="Rockland">Rockland</option>
            <option value="Rockport">Rockport</option>
        </select>
    </div>

    <!-- Dates Filter -->
    <div class="mb-3">
        <label for="dates" class="form-label">Dates</label>
        <div class="row g-2">
            <div class="col-md-6">
                <input type="date" id="arrival_date" name="arrival_date" class="form-control" required placeholder="Arrival Date" />
            </div>
            <div class="col-md-6">
                <input type="date" id="departure_date" name="departure_date" class="form-control" required placeholder="Departure Date" />
            </div>
        </div>
    </div>

    <!-- Adults Filter -->
    <div class="mb-3">
        <label for="adults" class="form-label">Adults</label>
        <input type="number" name="adults" id="adults" class="form-control" min="1" value="1" />
    </div>

    <!-- Submit Button -->
    <div class="d-grid">
        <button id="submit_list" type="submit" class="btn btn-primary">
            SEARCH
        </button>
    </div>
</form>